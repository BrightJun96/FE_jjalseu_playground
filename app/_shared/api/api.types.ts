export type QueryString =
    | string
    | URLSearchParams
    | Record<string, string>
    | string[][];

export interface CustomRequestInit extends RequestInit {
    queryString?: QueryString;
}

// 응답 타입
export interface IResponse<T> {
    data: T;
    // message: string | null;
    // isSuccess: boolean;
}
