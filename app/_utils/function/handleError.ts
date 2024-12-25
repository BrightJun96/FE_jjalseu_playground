import ArrayEmptyError from "@/app/_customError/ArrayEmptyError";
import NullOrUndefinedError from "@/app/_customError/NullOrUndefinedError";
import ApiError from "@/app/services/ApiError";

// 에러 발생시 정보(메시지, 에러 발생 시 실행할 함수)를 담당하는 인터페이스
interface IErrorInfo {
    api?: Info;
    arrayEmpty?: Info;
    nullOrUndefined?: Info;
}

interface Info {
    message: string;
    action: () => void;
}

// 에러별 처리를 담당하는 함수
// catch 문에서 종합적으로 error 핸들링하는 함수
function handleError(
    error: unknown,
    errorInfo: IErrorInfo,
) {
    if (error instanceof ApiError) {
        error.getDetailsLog(errorInfo.api?.message);
        if (errorInfo && errorInfo.api?.action) {
            errorInfo.api.action();
        }
    } else if (error instanceof ArrayEmptyError) {
        error.getDetailsLog(errorInfo.arrayEmpty?.message);
        if (errorInfo && errorInfo.arrayEmpty?.action) {
            errorInfo.arrayEmpty.action();
        }
    } else if (error instanceof NullOrUndefinedError) {
        error.getDetailsLog(
            errorInfo.nullOrUndefined?.message,
        );
        if (
            errorInfo &&
            errorInfo.nullOrUndefined?.action
        ) {
            errorInfo.nullOrUndefined.action();
        }
    } else {
        console.error("알 수 없는 에러 발생", error);
    }
}

export default handleError;
