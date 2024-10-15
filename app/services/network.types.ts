// fetch option 타입 확장
export interface CustomRequestInit extends RequestInit {
    queryString?:(string[][] | Record<string, string> | string | URLSearchParams)
}
