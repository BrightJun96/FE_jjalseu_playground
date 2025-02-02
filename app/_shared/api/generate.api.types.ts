/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ChatRoom {
    id: number;
    users: User[];
    chats: Chat[];
}

export interface User {
    id: number;
    email: string;
    password: string;
    role: UserRoleEnum;
    chats: Chat[];
    chatRooms: ChatRoom[];
}

export interface Chat {
    id: number;
    author: User;
    message: string;
    chatRoom: ChatRoom;
}

export interface CreateUserDto {
    email: string;
    password: string;
}

export type UpdateUserDto = object;

export interface GetQuizMetaDataSharedDto {
    /**
     * PK
     * @example "1"
     */
    id: number;
    /**
     * SEO 메타 제목
     * @example "react 퀴즈"
     */
    seoMetaTitle: string;
    /**
     * SEO 메타 설명
     * @example "react 관련 퀴즈입니다."
     */
    seoMetaDescription: string;
    /**
     * SEO 퀴즈 이미지
     * @example "https://s3.sdfsfsdfsdfds.com"
     */
    metaImageUrl?: string;
}

export interface GetQuizMultipleChoiceSharedDto {
    /**
     * PK
     * @example "1"
     */
    id: number;
    /**
     * 문제 내용
     * @example "react는 SPA프레임워크입니다...."
     */
    content: string;
}

export interface GetQuizSharedDto {
    /**
     * PK
     * @example 1
     */
    id: number;
    /**
     * 퀴즈 문제
     * @example "다음은 react 관련 문제입니다."
     */
    title: string;
    /**
     * 퀴즈 내용
     * @example "react는 SPA 프레임워크입니다.."
     */
    content: string;
    /**
     * 퀴즈 해설
     * @example "state는 리렌더링을 해줍니다.."
     */
    explanation: string;
    /**
     * 상세 URL
     * @example "react"
     */
    detailUrl: string;
    /**
     * 퀴즈 분야
     * @example "FRONTEND"
     */
    field: GetQuizSharedDtoFieldEnum;
    /**
     * 정답 번호
     * @example "1"
     */
    answer: number;
    /** SEO 관련 사용될 데이터 */
    quizMetaData: GetQuizMetaDataSharedDto;
    /** 객관식 답안지들 */
    multipleChoices: GetQuizMultipleChoiceSharedDto[];
}

export interface QuizDetailURLResponseDto {
    /**
     * 상세 URL
     * @example "react"
     */
    detailUrl: string;
}

export interface CheckAnswerRequestDto {
    /**
     * QUIZ PK
     * @example 1
     */
    quizId: number;
    /**
     * 정답
     * @example 2
     */
    answer: number;
}

export interface CheckAnswerResponseDto {
    /**
     * 정답 여부
     * @example true
     */
    isCorrect: boolean;
}

export interface GetQuizListResponseDto {
    /** 퀴즈 데이터 목록 */
    data: GetQuizSharedDto[];
    /**
     * 데이터 갯수
     * @example 10
     */
    count: number;
    /**
     * 다음 요청할 커서
     * @example "eyJ2YWx1ZXMiOnsiaWQiOjR9LCJvcmRlcnMiOlsiaWRfREVTQyJdfQ=="
     */
    nextCursor: string;
}

export interface CreateQuizMetaDataDtoRequest {
    /**
     * SEO 메타 제목
     * @example "react 퀴즈"
     */
    seoMetaTitle: string;
    /**
     * SEO 메타 설명
     * @example "react 관련 퀴즈입니다."
     */
    seoMetaDescription: string;
    /**
     * SEO 퀴즈 이미지
     * @example "https://s3.sdfsfsdfsdfds.com"
     */
    metaImageUrl?: string;
}

export interface CreateMultipleChoiceRequestDto {
    /**
     * 문제 내용
     * @example "react는 SPA프레임워크입니다...."
     */
    content: string;
}

export interface CreateQuizRequestDto {
    /**
     * 퀴즈 문제
     * @example "다음은 react 관련 문제입니다."
     */
    title: string;
    /**
     * 퀴즈 내용
     * @example "react는 SPA 프레임워크입니다.."
     */
    content: string;
    /**
     * 퀴즈 해설
     * @example "state는 리렌더링을 해줍니다.."
     */
    explanation: string;
    /**
     * 상세 URL
     * @example "react"
     */
    detailUrl: string;
    /**
     * 퀴즈 분야
     * @example "FRONTEND"
     */
    field: CreateQuizRequestDtoFieldEnum;
    /**
     * 정답 번호
     * @example "1"
     */
    answer: number;
    quizMetaData: CreateQuizMetaDataDtoRequest;
    multipleChoices: CreateMultipleChoiceRequestDto[];
}

export type UpdateQuizMetaDataRequestDto = object;

export interface UpdateMultipleChoiceRequestDto {
    id: number;
}

export interface UpdateQuizRequestDto {
    title?: string;
    content?: string;
    explanation?: string;
    detailUrl?: string;
    field?: UpdateQuizRequestDtoFieldEnum;
    answer?: number;
    quizMetaData?: UpdateQuizMetaDataRequestDto;
    multipleChoices?: UpdateMultipleChoiceRequestDto[];
}

export interface DeleteQuizResponseDto {
    /**
     * 퀴즈 삭제 상태
     * @example true
     */
    removeStatus: boolean;
}

export type CreateCodeDto = object;

export type UpdateCodeDto = object;

export interface Interview {
    tech: InterviewTechEnum;
    interviewMetaData: InterviewMetadata;
    id: number;
    title: string;
    content: string;
    detailUrl: string;
    field: InterviewFieldEnum;
}

export interface InterviewMetadata {
    id: number;
    interview: Interview;
    metaTitle: string;
    metaDescription: string;
    metaImageUrl: string;
}

export interface ListSharedResponseDto {
    /** 데이터 목록 */
    data: string[];
    /**
     * 데이터 갯수
     * @example 10
     */
    count: number;
    /**
     * 다음 요청할 커서
     * @example "eyJ2YWx1ZXMiOnsiaWQiOjR9LCJvcmRlcnMiOlsiaWRfREVTQyJdfQ=="
     */
    nextCursor: string;
}

export interface GetInterviewMetadataSharedDto {
    /**
     * PK
     * @example "1"
     */
    id: number;
    /**
     * SEO 메타 제목
     * @example "react"
     */
    metaTitle: string;
    /**
     * SEO 메타 설명
     * @example "react 관련 면접 내용"
     */
    metaDescription: string;
    /**
     * SEO 퀴즈 이미지
     * @example "https://s3.sdfsfsdfsdfds.com"
     */
    metaImageUrl?: string;
}

export interface GetInterviewSharedDto {
    /**
     * PK
     * @example 1
     */
    id: number;
    /**
     * 제목
     * @example "react를 왜 사용하는지 설명하세요."
     */
    title: string;
    /**
     * 내용
     * @example "react는 SPA 프레임워크로서 컴포넌트 기반.."
     */
    content: string;
    /**
     * 상세 URL
     * @example "react"
     */
    detailUrl: string;
    /**
     * 분야
     * @example "FRONTEND"
     */
    field: GetInterviewSharedDtoFieldEnum;
    /** SEO 관련 사용될 데이터 */
    metaData: GetInterviewMetadataSharedDto;
}

export interface CreateInterviewMetadataDto {
    metaTitle: string;
    metaDescription: string;
    metaImageUrl?: string;
}

export interface CreateInterviewDto {
    title: string;
    content: string;
    detailUrl: string;
    field: CreateInterviewDtoFieldEnum;
    metaData: CreateInterviewMetadataDto;
}

export interface UpdateInterviewRequestDto {
    title?: string;
    content?: string;
    detailUrl?: string;
    field?: UpdateInterviewRequestDtoFieldEnum;
    metaData?: CreateInterviewMetadataDto;
}

export type CreateBlogDto = object;

export type UpdateBlogDto = object;

export interface Concept {
    tech: ConceptTechEnum;
    conceptMeta: ConceptMeta;
    id: number;
    title: string;
    content: string;
    detailUrl: string;
    field: ConceptFieldEnum;
}

export interface ConceptMeta {
    concept: Concept;
    id: number;
    metaTitle: string;
    metaDescription: string;
    metaImageUrl: string;
}

export interface MetadataSharedDto {
    /**
     * SEO - 제목
     * @example "react 관련..."
     */
    metaTitle: string;
    /**
     * SEO - 설명
     * @example "react 관련 설명입니다."
     */
    metaDescription: string;
    /**
     * SEO - 이미지 URL
     * @example "https://s3.efsdfs/...."
     */
    metaImageUrl?: string;
}

export interface GetConceptSharedDto {
    /**
     * PK
     * @example 1
     */
    id: number;
    /**
     * 문제
     * @example "다음은 react 관련 문제입니다."
     */
    title: string;
    /**
     * 내용
     * @example "react는 SPA 프레임워크입니다.."
     */
    content: string;
    /**
     * 상세 URL
     * @example "react"
     */
    detailUrl: string;
    /**
     * 퀴즈 분야
     * @example "FRONTEND"
     */
    field: GetConceptSharedDtoFieldEnum;
    /**
     * 기술
     * @example "REACTJS"
     */
    tech: GetConceptSharedDtoTechEnum;
    /** SEO 관련  데이터 */
    conceptMeta: MetadataSharedDto;
}

export interface CreateConceptRequestDto {
    title: string;
    content: string;
    detailUrl: string;
    field: CreateConceptRequestDtoFieldEnum;
    tech: CreateConceptRequestDtoTechEnum;
    metaData: MetadataSharedDto;
}

export interface UpdateConceptRequestDto {
    title?: string;
    content?: string;
    detailUrl?: string;
    field?: UpdateConceptRequestDtoFieldEnum;
    tech?: UpdateConceptRequestDtoTechEnum;
    metaData?: MetadataSharedDto;
}

export interface DeleteResponseDto {
    /**
     * 삭제 상태
     * @example true
     */
    removeStatus: boolean;
}

export enum UserRoleEnum {
    Value0 = 0,
    Value1 = 1,
    Value2 = 2,
}

/**
 * 퀴즈 분야
 * @example "FRONTEND"
 */
export enum GetQuizSharedDtoFieldEnum {
    FRONTEND = "FRONTEND",
    BACKEND = "BACKEND",
    DATABASE = "DATABASE",
}

/**
 * 퀴즈 분야
 * @example "FRONTEND"
 */
export enum CreateQuizRequestDtoFieldEnum {
    FRONTEND = "FRONTEND",
    BACKEND = "BACKEND",
    DATABASE = "DATABASE",
}

export enum UpdateQuizRequestDtoFieldEnum {
    FRONTEND = "FRONTEND",
    BACKEND = "BACKEND",
    DATABASE = "DATABASE",
}

export enum InterviewTechEnum {
    JAVASCRIPT = "JAVASCRIPT",
    Typescript = "Typescript",
    REACTJS = "REACTJS",
    NEXTJS = "NEXTJS",
    NESTJS = "NESTJS",
}

export enum InterviewFieldEnum {
    FRONTEND = "FRONTEND",
    BACKEND = "BACKEND",
    DATABASE = "DATABASE",
}

/**
 * 분야
 * @example "FRONTEND"
 */
export enum GetInterviewSharedDtoFieldEnum {
    FRONTEND = "FRONTEND",
    BACKEND = "BACKEND",
    DATABASE = "DATABASE",
}

export enum CreateInterviewDtoFieldEnum {
    FRONTEND = "FRONTEND",
    BACKEND = "BACKEND",
    DATABASE = "DATABASE",
}

export enum UpdateInterviewRequestDtoFieldEnum {
    FRONTEND = "FRONTEND",
    BACKEND = "BACKEND",
    DATABASE = "DATABASE",
}

export enum ConceptTechEnum {
    JAVASCRIPT = "JAVASCRIPT",
    Typescript = "Typescript",
    REACTJS = "REACTJS",
    NEXTJS = "NEXTJS",
    NESTJS = "NESTJS",
}

export enum ConceptFieldEnum {
    FRONTEND = "FRONTEND",
    BACKEND = "BACKEND",
    DATABASE = "DATABASE",
}

/**
 * 퀴즈 분야
 * @example "FRONTEND"
 */
export enum GetConceptSharedDtoFieldEnum {
    FRONTEND = "FRONTEND",
    BACKEND = "BACKEND",
    DATABASE = "DATABASE",
}

/**
 * 기술
 * @example "REACTJS"
 */
export enum GetConceptSharedDtoTechEnum {
    JAVASCRIPT = "JAVASCRIPT",
    Typescript = "Typescript",
    REACTJS = "REACTJS",
    NEXTJS = "NEXTJS",
    NESTJS = "NESTJS",
}

export enum CreateConceptRequestDtoFieldEnum {
    FRONTEND = "FRONTEND",
    BACKEND = "BACKEND",
    DATABASE = "DATABASE",
}

export enum CreateConceptRequestDtoTechEnum {
    JAVASCRIPT = "JAVASCRIPT",
    Typescript = "Typescript",
    REACTJS = "REACTJS",
    NEXTJS = "NEXTJS",
    NESTJS = "NESTJS",
}

export enum UpdateConceptRequestDtoFieldEnum {
    FRONTEND = "FRONTEND",
    BACKEND = "BACKEND",
    DATABASE = "DATABASE",
}

export enum UpdateConceptRequestDtoTechEnum {
    JAVASCRIPT = "JAVASCRIPT",
    Typescript = "Typescript",
    REACTJS = "REACTJS",
    NEXTJS = "NEXTJS",
    NESTJS = "NESTJS",
}

export interface QuizControllerFindAllParams {
    /**
     * 커서
     * @example "eyJ2YWx1ZXMiOnsiaWQiOjR9LCJvcmRlcnMiOlsiaWRfREVTQyJdfQ=="
     */
    cursor?: string;
    /**
     * 정렬 기준(내림 차순/오름 차순)
     * @default ["id_DESC"]
     * @example ["id_DESC"]
     */
    order?: string[];
    /**
     * 가져올 데이터 수
     * @default 5
     * @example 5
     */
    take?: number;
    /** 제목 검색 필터 */
    title?: string;
    /** 내용 검색 필터 */
    content?: string;
    /** 설명 검색 필터 */
    explanation?: string;
    /** 세부 URL 검색 필터 */
    detailUrl?: string;
    /** 분야 필터 */
    field?: FieldEnum;
}

/** 분야 필터 */
export enum FieldEnum {
    FRONTEND = "FRONTEND",
    BACKEND = "BACKEND",
    DATABASE = "DATABASE",
}

/** 분야 필터 */
export enum QuizControllerFindAllParams1FieldEnum {
    FRONTEND = "FRONTEND",
    BACKEND = "BACKEND",
    DATABASE = "DATABASE",
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<
    Body,
    "body" | "bodyUsed"
>;

export interface FullRequestParams
    extends Omit<RequestInit, "body"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: ResponseFormat;
    /** request body */
    body?: unknown;
    /** base url */
    baseUrl?: string;
    /** request cancellation token */
    cancelToken?: CancelToken;
}

export type RequestParams = Omit<
    FullRequestParams,
    "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<
        RequestParams,
        "baseUrl" | "cancelToken" | "signal"
    >;
    securityWorker?: (
        securityData: SecurityDataType | null,
    ) =>
        | Promise<RequestParams | void>
        | RequestParams
        | void;
    customFetch?: typeof fetch;
}

export interface HttpResponse<
    D extends unknown,
    E extends unknown = unknown,
> extends Response {
    data: D;
    error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded",
    Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
    public baseUrl: string = "";
    private securityData: SecurityDataType | null = null;
    private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
    private abortControllers = new Map<
        CancelToken,
        AbortController
    >();
    private customFetch = (
        ...fetchParams: Parameters<typeof fetch>
    ) => fetch(...fetchParams);

    private baseApiParams: RequestParams = {
        credentials: "same-origin",
        headers: {},
        redirect: "follow",
        referrerPolicy: "no-referrer",
    };

    constructor(
        apiConfig: ApiConfig<SecurityDataType> = {},
    ) {
        Object.assign(this, apiConfig);
    }

    public setSecurityData = (
        data: SecurityDataType | null,
    ) => {
        this.securityData = data;
    };

    protected encodeQueryParam(key: string, value: any) {
        const encodedKey = encodeURIComponent(key);
        return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
    }

    protected addQueryParam(
        query: QueryParamsType,
        key: string,
    ) {
        return this.encodeQueryParam(key, query[key]);
    }

    protected addArrayQueryParam(
        query: QueryParamsType,
        key: string,
    ) {
        const value = query[key];
        return value
            .map((v: any) => this.encodeQueryParam(key, v))
            .join("&");
    }

    protected toQueryString(
        rawQuery?: QueryParamsType,
    ): string {
        const query = rawQuery || {};
        const keys = Object.keys(query).filter(
            (key) => "undefined" !== typeof query[key],
        );
        return keys
            .map((key) =>
                Array.isArray(query[key])
                    ? this.addArrayQueryParam(query, key)
                    : this.addQueryParam(query, key),
            )
            .join("&");
    }

    protected addQueryParams(
        rawQuery?: QueryParamsType,
    ): string {
        const queryString = this.toQueryString(rawQuery);
        return queryString ? `?${queryString}` : "";
    }

    private contentFormatters: Record<
        ContentType,
        (input: any) => any
    > = {
        [ContentType.Json]: (input: any) =>
            input !== null &&
            (typeof input === "object" ||
                typeof input === "string")
                ? JSON.stringify(input)
                : input,
        [ContentType.Text]: (input: any) =>
            input !== null && typeof input !== "string"
                ? JSON.stringify(input)
                : input,
        [ContentType.FormData]: (input: any) =>
            Object.keys(input || {}).reduce(
                (formData, key) => {
                    const property = input[key];
                    formData.append(
                        key,
                        property instanceof Blob
                            ? property
                            : typeof property ===
                                    "object" &&
                                property !== null
                              ? JSON.stringify(property)
                              : `${property}`,
                    );
                    return formData;
                },
                new FormData(),
            ),
        [ContentType.UrlEncoded]: (input: any) =>
            this.toQueryString(input),
    };

    protected mergeRequestParams(
        params1: RequestParams,
        params2?: RequestParams,
    ): RequestParams {
        return {
            ...this.baseApiParams,
            ...params1,
            ...(params2 || {}),
            headers: {
                ...(this.baseApiParams.headers || {}),
                ...(params1.headers || {}),
                ...((params2 && params2.headers) || {}),
            },
        };
    }

    protected createAbortSignal = (
        cancelToken: CancelToken,
    ): AbortSignal | undefined => {
        if (this.abortControllers.has(cancelToken)) {
            const abortController =
                this.abortControllers.get(cancelToken);
            if (abortController) {
                return abortController.signal;
            }
            return void 0;
        }

        const abortController = new AbortController();
        this.abortControllers.set(
            cancelToken,
            abortController,
        );
        return abortController.signal;
    };

    public abortRequest = (cancelToken: CancelToken) => {
        const abortController =
            this.abortControllers.get(cancelToken);

        if (abortController) {
            abortController.abort();
            this.abortControllers.delete(cancelToken);
        }
    };

    public request = async <T = any, E = any>({
        body,
        secure,
        path,
        type,
        query,
        format,
        baseUrl,
        cancelToken,
        ...params
    }: FullRequestParams): Promise<HttpResponse<T, E>> => {
        const secureParams =
            ((typeof secure === "boolean"
                ? secure
                : this.baseApiParams.secure) &&
                this.securityWorker &&
                (await this.securityWorker(
                    this.securityData,
                ))) ||
            {};
        const requestParams = this.mergeRequestParams(
            params,
            secureParams,
        );
        const queryString =
            query && this.toQueryString(query);
        const payloadFormatter =
            this.contentFormatters[
                type || ContentType.Json
            ];
        const responseFormat =
            format || requestParams.format;

        return this.customFetch(
            `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
            {
                ...requestParams,
                headers: {
                    ...(requestParams.headers || {}),
                    ...(type &&
                    type !== ContentType.FormData
                        ? { "Content-Type": type }
                        : {}),
                },
                signal:
                    (cancelToken
                        ? this.createAbortSignal(
                              cancelToken,
                          )
                        : requestParams.signal) || null,
                body:
                    typeof body === "undefined" ||
                    body === null
                        ? null
                        : payloadFormatter(body),
            },
        ).then(async (response) => {
            const r = response.clone() as HttpResponse<
                T,
                E
            >;
            r.data = null as unknown as T;
            r.error = null as unknown as E;

            const data = !responseFormat
                ? r
                : await response[responseFormat]()
                      .then((data) => {
                          if (r.ok) {
                              r.data = data;
                          } else {
                              r.error = data;
                          }
                          return r;
                      })
                      .catch((e) => {
                          r.error = e;
                          return r;
                      });

            if (cancelToken) {
                this.abortControllers.delete(cancelToken);
            }

            if (!response.ok) throw data;
            return data;
        });
    };
}

/**
 * @title Dev-Lounge API
 * @version 1.0
 * @contact
 *
 * Dev-Lounge API 문서
 */
export class Api<
    SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
    auth = {
        /**
         * No description
         *
         * @tags Auth
         * @name AuthControllerRegisterUser
         * @request POST:/auth/register
         * @secure
         */
        authControllerRegisterUser: (
            params: RequestParams = {},
        ) =>
            this.request<User, any>({
                path: `/auth/register`,
                method: "POST",
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * No description
         *
         * @tags Auth
         * @name AuthControllerLoginUser
         * @request POST:/auth/login
         * @secure
         */
        authControllerLoginUser: (
            params: RequestParams = {},
        ) =>
            this.request<void, any>({
                path: `/auth/login`,
                method: "POST",
                secure: true,
                ...params,
            }),

        /**
         * @description 특정 사용자 차단/토큰(관리자용)
         *
         * @tags Auth
         * @name AuthControllerBlockToken
         * @request POST:/auth/token-block
         * @secure
         */
        authControllerBlockToken: (
            params: RequestParams = {},
        ) =>
            this.request<boolean, any>({
                path: `/auth/token-block`,
                method: "POST",
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * @description accessToken 재발급
         *
         * @tags Auth
         * @name AuthControllerRotateAccessToken
         * @request POST:/auth/reissue-accessToken
         * @secure
         */
        authControllerRotateAccessToken: (
            params: RequestParams = {},
        ) =>
            this.request<void, any>({
                path: `/auth/reissue-accessToken`,
                method: "POST",
                secure: true,
                ...params,
            }),

        /**
         * No description
         *
         * @tags Auth
         * @name AuthControllerLoginUserPassport
         * @request POST:/auth/login/passport
         * @secure
         */
        authControllerLoginUserPassport: (
            params: RequestParams = {},
        ) =>
            this.request<void, any>({
                path: `/auth/login/passport`,
                method: "POST",
                secure: true,
                ...params,
            }),
    };
    user = {
        /**
         * No description
         *
         * @tags USER
         * @name UserControllerCreate
         * @request POST:/user
         * @secure
         */
        userControllerCreate: (
            data: CreateUserDto,
            params: RequestParams = {},
        ) =>
            this.request<User, any>({
                path: `/user`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * No description
         *
         * @tags USER
         * @name UserControllerFindAll
         * @request GET:/user
         * @secure
         */
        userControllerFindAll: (
            params: RequestParams = {},
        ) =>
            this.request<User[], any>({
                path: `/user`,
                method: "GET",
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * No description
         *
         * @tags USER
         * @name UserControllerFindOne
         * @request GET:/user/{id}
         * @secure
         */
        userControllerFindOne: (
            id: number,
            params: RequestParams = {},
        ) =>
            this.request<User, any>({
                path: `/user/${id}`,
                method: "GET",
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * No description
         *
         * @tags USER
         * @name UserControllerUpdate
         * @request PATCH:/user/{id}
         * @secure
         */
        userControllerUpdate: (
            id: number,
            data: UpdateUserDto,
            params: RequestParams = {},
        ) =>
            this.request<User, any>({
                path: `/user/${id}`,
                method: "PATCH",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * No description
         *
         * @tags USER
         * @name UserControllerRemove
         * @request DELETE:/user/{id}
         * @secure
         */
        userControllerRemove: (
            id: number,
            params: RequestParams = {},
        ) =>
            this.request<number, any>({
                path: `/user/${id}`,
                method: "DELETE",
                secure: true,
                format: "json",
                ...params,
            }),
    };
    fileUpload = {
        /**
         * @description 동영상 업로드 API(mp4 파일만 업로드 가능)
         *
         * @tags 파일 업로드
         * @name FileUploadControllerCreate
         * @request POST:/file-upload
         * @secure
         */
        fileUploadControllerCreate: (
            params: RequestParams = {},
        ) =>
            this.request<void, any>({
                path: `/file-upload`,
                method: "POST",
                secure: true,
                ...params,
            }),
    };
    quiz = {
        /**
         * @description 퀴즈 상세 조회 BY URL
         *
         * @tags 퀴즈
         * @name QuizControllerFindOneByUrl
         * @request GET:/quiz/detail-url/{detailUrl}
         */
        quizControllerFindOneByUrl: (
            detailUrl: string,
            params: RequestParams = {},
        ) =>
            this.request<GetQuizSharedDto, any>({
                path: `/quiz/detail-url/${detailUrl}`,
                method: "GET",
                format: "json",
                ...params,
            }),

        /**
         * @description 퀴즈 DETAIL URL 목록
         *
         * @tags 퀴즈
         * @name QuizControllerFindDetailUrls
         * @request GET:/quiz/detail-urls
         */
        quizControllerFindDetailUrls: (
            params: RequestParams = {},
        ) =>
            this.request<QuizDetailURLResponseDto[], any>({
                path: `/quiz/detail-urls`,
                method: "GET",
                format: "json",
                ...params,
            }),

        /**
         * @description 퀴즈 정답 확인
         *
         * @tags 퀴즈
         * @name QuizControllerCheckAnswer
         * @request POST:/quiz/check-answer
         */
        quizControllerCheckAnswer: (
            data: CheckAnswerRequestDto,
            params: RequestParams = {},
        ) =>
            this.request<CheckAnswerResponseDto, any>({
                path: `/quiz/check-answer`,
                method: "POST",
                body: data,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * @description 관리자-퀴즈 목록
         *
         * @tags 퀴즈
         * @name QuizControllerFindAll
         * @request GET:/quiz
         */
        quizControllerFindAll: (
            query: QuizControllerFindAllParams,
            params: RequestParams = {},
        ) =>
            this.request<GetQuizListResponseDto, any>({
                path: `/quiz`,
                method: "GET",
                query: query,
                format: "json",
                ...params,
            }),

        /**
         * @description 관리자-퀴즈 생성
         *
         * @tags 퀴즈
         * @name QuizControllerCreate
         * @request POST:/quiz
         */
        quizControllerCreate: (
            data: CreateQuizRequestDto,
            params: RequestParams = {},
        ) =>
            this.request<GetQuizSharedDto, any>({
                path: `/quiz`,
                method: "POST",
                body: data,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * @description 관리자-퀴즈 수정
         *
         * @tags 퀴즈
         * @name QuizControllerUpdate
         * @request PATCH:/quiz/{id}
         */
        quizControllerUpdate: (
            id: number,
            data: UpdateQuizRequestDto,
            params: RequestParams = {},
        ) =>
            this.request<GetQuizSharedDto, any>({
                path: `/quiz/${id}`,
                method: "PATCH",
                body: data,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * @description 관리자-퀴즈 상세
         *
         * @tags 퀴즈
         * @name QuizControllerFindOneById
         * @request GET:/quiz/{id}
         */
        quizControllerFindOneById: (
            id: number,
            params: RequestParams = {},
        ) =>
            this.request<GetQuizSharedDto, any>({
                path: `/quiz/${id}`,
                method: "GET",
                format: "json",
                ...params,
            }),

        /**
         * @description 관리자-퀴즈 삭제
         *
         * @tags 퀴즈
         * @name QuizControllerRemove
         * @request DELETE:/quiz/{id}
         */
        quizControllerRemove: (
            id: number,
            params: RequestParams = {},
        ) =>
            this.request<DeleteQuizResponseDto, any>({
                path: `/quiz/${id}`,
                method: "DELETE",
                format: "json",
                ...params,
            }),
    };
    shared = {
        /**
         * No description
         *
         * @tags Shared
         * @name SharedControllerCreatePresignedUrl
         * @request GET:/shared/presigned-url
         */
        sharedControllerCreatePresignedUrl: (
            params: RequestParams = {},
        ) =>
            this.request<void, any>({
                path: `/shared/presigned-url`,
                method: "GET",
                ...params,
            }),
    };
    code = {
        /**
         * No description
         *
         * @tags 코드 템플릿
         * @name CodeControllerCreate
         * @request POST:/code
         */
        codeControllerCreate: (
            data: CreateCodeDto,
            params: RequestParams = {},
        ) =>
            this.request<string, any>({
                path: `/code`,
                method: "POST",
                body: data,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * No description
         *
         * @tags 코드 템플릿
         * @name CodeControllerFindAll
         * @request GET:/code
         */
        codeControllerFindAll: (
            params: RequestParams = {},
        ) =>
            this.request<string, any>({
                path: `/code`,
                method: "GET",
                format: "json",
                ...params,
            }),

        /**
         * No description
         *
         * @tags 코드 템플릿
         * @name CodeControllerFindOne
         * @request GET:/code/{id}
         */
        codeControllerFindOne: (
            id: string,
            params: RequestParams = {},
        ) =>
            this.request<string, any>({
                path: `/code/${id}`,
                method: "GET",
                format: "json",
                ...params,
            }),

        /**
         * No description
         *
         * @tags 코드 템플릿
         * @name CodeControllerUpdate
         * @request PATCH:/code/{id}
         */
        codeControllerUpdate: (
            id: string,
            data: UpdateCodeDto,
            params: RequestParams = {},
        ) =>
            this.request<string, any>({
                path: `/code/${id}`,
                method: "PATCH",
                body: data,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * No description
         *
         * @tags 코드 템플릿
         * @name CodeControllerRemove
         * @request DELETE:/code/{id}
         */
        codeControllerRemove: (
            id: string,
            params: RequestParams = {},
        ) =>
            this.request<string, any>({
                path: `/code/${id}`,
                method: "DELETE",
                format: "json",
                ...params,
            }),
    };
    interview = {
        /**
         * @description 사용자-인터뷰 목록
         *
         * @tags 면접
         * @name InterviewControllerFindAll
         * @request GET:/interview
         */
        interviewControllerFindAll: (
            params: RequestParams = {},
        ) =>
            this.request<Interview[], any>({
                path: `/interview`,
                method: "GET",
                format: "json",
                ...params,
            }),

        /**
         * @description 관리자-인터뷰 생성
         *
         * @tags 면접
         * @name InterviewControllerCreate
         * @request POST:/interview
         */
        interviewControllerCreate: (
            data: CreateInterviewDto,
            params: RequestParams = {},
        ) =>
            this.request<GetInterviewSharedDto, any>({
                path: `/interview`,
                method: "POST",
                body: data,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * @description 관리자-인터뷰 상세 조회
         *
         * @tags 면접
         * @name InterviewControllerFindOne
         * @request GET:/interview/{id}
         */
        interviewControllerFindOne: (
            id: number,
            params: RequestParams = {},
        ) =>
            this.request<Interview, any>({
                path: `/interview/${id}`,
                method: "GET",
                format: "json",
                ...params,
            }),

        /**
         * @description 관리자-인터뷰 수정
         *
         * @tags 면접
         * @name InterviewControllerUpdate
         * @request PATCH:/interview/{id}
         */
        interviewControllerUpdate: (
            id: number,
            data: UpdateInterviewRequestDto,
            params: RequestParams = {},
        ) =>
            this.request<Interview, any>({
                path: `/interview/${id}`,
                method: "PATCH",
                body: data,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * @description 관리자-인터뷰 삭제
         *
         * @tags 면접
         * @name InterviewControllerRemove
         * @request DELETE:/interview/{id}
         */
        interviewControllerRemove: (
            id: number,
            params: RequestParams = {},
        ) =>
            this.request<void, any>({
                path: `/interview/${id}`,
                method: "DELETE",
                ...params,
            }),
    };
    blog = {
        /**
         * No description
         *
         * @tags 블로그
         * @name BlogControllerCreate
         * @request POST:/blog
         */
        blogControllerCreate: (
            data: CreateBlogDto,
            params: RequestParams = {},
        ) =>
            this.request<string, any>({
                path: `/blog`,
                method: "POST",
                body: data,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * No description
         *
         * @tags 블로그
         * @name BlogControllerFindAll
         * @request GET:/blog
         */
        blogControllerFindAll: (
            params: RequestParams = {},
        ) =>
            this.request<string, any>({
                path: `/blog`,
                method: "GET",
                format: "json",
                ...params,
            }),

        /**
         * No description
         *
         * @tags 블로그
         * @name BlogControllerFindOne
         * @request GET:/blog/{id}
         */
        blogControllerFindOne: (
            id: string,
            params: RequestParams = {},
        ) =>
            this.request<string, any>({
                path: `/blog/${id}`,
                method: "GET",
                format: "json",
                ...params,
            }),

        /**
         * No description
         *
         * @tags 블로그
         * @name BlogControllerUpdate
         * @request PATCH:/blog/{id}
         */
        blogControllerUpdate: (
            id: string,
            data: UpdateBlogDto,
            params: RequestParams = {},
        ) =>
            this.request<string, any>({
                path: `/blog/${id}`,
                method: "PATCH",
                body: data,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * No description
         *
         * @tags 블로그
         * @name BlogControllerRemove
         * @request DELETE:/blog/{id}
         */
        blogControllerRemove: (
            id: string,
            params: RequestParams = {},
        ) =>
            this.request<string, any>({
                path: `/blog/${id}`,
                method: "DELETE",
                format: "json",
                ...params,
            }),
    };
    concept = {
        /**
         * @description 사용자-개념 목록
         *
         * @tags 개발 개념
         * @name ConceptControllerFindAll
         * @request GET:/concept
         */
        conceptControllerFindAll: (
            params: RequestParams = {},
        ) =>
            this.request<Concept[], any>({
                path: `/concept`,
                method: "GET",
                format: "json",
                ...params,
            }),

        /**
         * @description 관리자-개념 생성
         *
         * @tags 개발 개념
         * @name ConceptControllerCreate
         * @request POST:/concept
         */
        conceptControllerCreate: (
            data: CreateConceptRequestDto,
            params: RequestParams = {},
        ) =>
            this.request<Concept, any>({
                path: `/concept`,
                method: "POST",
                body: data,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * @description 관리자-개념 수정
         *
         * @tags 개발 개념
         * @name ConceptControllerUpdate
         * @request PATCH:/concept/{id}
         */
        conceptControllerUpdate: (
            id: number,
            data: UpdateConceptRequestDto,
            params: RequestParams = {},
        ) =>
            this.request<Concept, any>({
                path: `/concept/${id}`,
                method: "PATCH",
                body: data,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * @description 관리자-개념 상세 조회
         *
         * @tags 개발 개념
         * @name ConceptControllerFindOne
         * @request GET:/concept/{id}
         */
        conceptControllerFindOne: (
            id: number,
            params: RequestParams = {},
        ) =>
            this.request<Concept, any>({
                path: `/concept/${id}`,
                method: "GET",
                format: "json",
                ...params,
            }),

        /**
         * @description 관리자-개념 삭제
         *
         * @tags 개발 개념
         * @name ConceptControllerRemove
         * @request DELETE:/concept/{id}
         */
        conceptControllerRemove: (
            id: number,
            params: RequestParams = {},
        ) =>
            this.request<DeleteResponseDto, any>({
                path: `/concept/${id}`,
                method: "DELETE",
                format: "json",
                ...params,
            }),
    };
}
