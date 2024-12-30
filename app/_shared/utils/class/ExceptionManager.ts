import ArrayEmptyError from "@/app/_shared/customError/ArrayEmptyError";
import NullOrUndefinedError from "@/app/_shared/customError/NullOrUndefinedError";

class ExceptionManager {
    // 배열이 비어있는 경우, 예외 처리
    static throwIfArrayEmpty<T>(
        array: T[],
        message: string,
    ) {
        if (array.length === 0) {
            throw new ArrayEmptyError(message);
        }
    }

    // 값이 null이거나 undefined인 경우, 예외 처리
    static throwIfNullOrUndefined(
        value: unknown,
        message: string,
    ) {
        if (value === null || value === undefined) {
            throw new NullOrUndefinedError(message);
        }
    }
}

export default ExceptionManager;
