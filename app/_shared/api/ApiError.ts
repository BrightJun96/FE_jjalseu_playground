// API 요청 중 발생하는 에러를 처리하기 위한 클래스
class ApiError extends Error {
    constructor(
        message: string,
        public status: number,
        public details: string,
    ) {
        super(message);
        // this.name = "ApiError";
        // Object.setPrototypeOf(this, ApiError.prototype); // 프로토타입 체인 설정
    }

    public getDetailsLog(additionalMessage?: string): void {
        console.error(
            `$${this.message} -(상태 코드:${this.status}) \n
            ${additionalMessage ?? ""} \n
       에러 상세 내용: ${this.details}`,
        );
    }
}

export default ApiError;
