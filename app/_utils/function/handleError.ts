import ArrayEmptyError from "@/app/_customError/ArrayEmptyError";
import NullOrUndefinedError from "@/app/_customError/NullOrUndefinedError";
import ApiError from "@/app/services/ApiError";

// 에러별 메시지를 담당하는 인터페이스
interface IErrorMessages {
    api?: string;
    arrayEmpty?: string;
    nullOrUndefined?: string;
}

// 에러 발생 시 실행할 함수를 담당하는 인터페이스
interface IActionsWhenError {
    api?: () => void;
    arrayEmpty?: () => void;
    nullOrUndefined?: () => void;
}
// 에러별 처리를 담당하는 함수
// catch 문에서 종합적으로 error 핸들링하는 함수
function handleError(
    error: unknown,
    errorMessages: IErrorMessages,
    actionsWhenError?: IActionsWhenError,
) {
    if (error instanceof ApiError) {
        error.getDetailsLog(errorMessages.api);
        if (actionsWhenError && actionsWhenError.api) {
            actionsWhenError.api();
        }
    } else if (error instanceof ArrayEmptyError) {
        error.getDetailsLog(errorMessages.arrayEmpty);
        if (
            actionsWhenError &&
            actionsWhenError.arrayEmpty
        ) {
            actionsWhenError.arrayEmpty();
        }
    } else if (error instanceof NullOrUndefinedError) {
        error.getDetailsLog(errorMessages.nullOrUndefined);
        if (
            actionsWhenError &&
            actionsWhenError.nullOrUndefined
        ) {
            actionsWhenError.nullOrUndefined();
        }
    } else {
        console.error("알 수 없는 에러 발생", error);
    }
}

export default handleError;
