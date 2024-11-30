import {CustomRequestInit, IResponse, QueryString} from "@/app/services/network.types";

abstract class BaseApi{

    private readonly baseUrl: string;

    protected constructor(baseUrl: string) {
        if (!baseUrl) {
            throw new Error("API 엔드포인트가 필요합니다.");
        }
        this.baseUrl = baseUrl;
    }

    protected async request<T=unknown>(endpoint: string, options?: CustomRequestInit):Promise<IResponse<T>>{

        try {
            const headers = {
                ...this.getDefaultHeaders(),
                ...options?.headers,
            };


            const processedEndpoint = options?.queryString
                ? `${endpoint}?${this.buildQueryString(options.queryString)}`
                : endpoint;

            const response = await fetch(`${this.baseUrl}/${processedEndpoint}`, {
                headers
                , ...options
            });

            if (!response.ok) {
                await this.handleErrorResponse(response);
            }

            return response.json() ;

        }
        catch (error) {
            console.error("API 요청 중 에러 발생:", error);
            throw error;
        }

    }

    private async handleErrorResponse(response: Response): Promise<void> {
        const errorDetails = await response.text();
        throw new Error(
            `Network error: ${response.status} - ${response.statusText}. Details: ${errorDetails}`
        );
    }

    private buildQueryString(query: QueryString): string {
        return Object.entries(query)
            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
            .join('&');
    }

    private getDefaultHeaders(): Record<string, string> {
        return {
            'Content-Type': 'application/json',
        };
    }


}

export default BaseApi;
