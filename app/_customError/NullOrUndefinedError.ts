// Null과 undefined 처리를 위한 에러 클래스
class NullOrUndefinedError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "NullOrUndefinedError";
    }

    public getDetailsLog(detailsMessage?: string): void {
        console.error(
            `null 또는 undefined 에러: ${detailsMessage}`,
        );
    }
}

export default NullOrUndefinedError;
