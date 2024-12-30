import {
    CustomRequestInit,
    IResponse,
    QueryString,
} from "@/app/_shared/api/api.types";
import ApiError from "@/app/_shared/api/ApiError";

abstract class BaseApi {
    private readonly baseUrl: string;

    protected constructor(baseUrl: string) {
        if (!baseUrl) {
            throw new Error("API 엔드포인트가 필요합니다.");
        }
        this.baseUrl = baseUrl;
    }

    protected async request<T = unknown>(
        endpoint: string,
        options?: CustomRequestInit,
    ): Promise<IResponse<T>> {
        try {
            const headers = {
                ...this.getDefaultHeaders(),
                ...options?.headers,
            };

            const processedEndpoint = options?.queryString
                ? `${endpoint}?${this.buildQueryString(options.queryString)}`
                : endpoint;

            const response = await fetch(
                `${this.baseUrl}/${processedEndpoint}`,
                {
                    headers,
                    ...options,
                },
            );

            if (!response.ok) {
                await this.handleErrorResponse(response);
            }

            return response.json();
        } catch (error) {
            if (error instanceof ApiError) {
                error.getDetailsLog();
            } else if (error instanceof TypeError) {
                console.error(`네트워크 에러 발생 ${error}\n
                다음과 같은 사항을 확인해주세요.
                - 네트워크 연결을 확인해주세요.
                - API 엔드포인트가 유효한지 확인해주세요.
                - CORS 정책을 확인해주세요.
                `);
            } else {
                console.error(
                    "알 수 없는 에러 발생",
                    error,
                );
            }

            throw error;
        }
    }

    private async handleErrorResponse(
        response: Response,
    ): Promise<void> {
        const errorDetails = await response.text();

        throw new ApiError(
            "API ERROR",
            response.status,
            errorDetails,
        );
    }

    private buildQueryString(query: QueryString): string {
        return Object.entries(query)
            .map(
                ([key, value]) =>
                    `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
            )
            .join("&");
    }

    private getDefaultHeaders(): Record<string, string> {
        return {
            "Content-Type": "application/json",
        };
    }
}

export default BaseApi;
