// 빈 배열 커스텀 에러
class ArrayEmptyError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ArrayEmptyError";
    }

    public getDetailsLog(detailsMessage?: string): void {
        console.error(`빈 배열 에러: ${detailsMessage}`);
    }
}

export default ArrayEmptyError;
