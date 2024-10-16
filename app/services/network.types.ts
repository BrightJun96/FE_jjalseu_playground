// fetch option 타입 확장
export interface CustomRequestInit extends RequestInit {
    queryString?:(string[][] | Record<string, string> | string | URLSearchParams)
}


// 응답 타입
export interface IResponse<T> {
    data: T;
    message: string|null;
    isSuccess: boolean;
}
