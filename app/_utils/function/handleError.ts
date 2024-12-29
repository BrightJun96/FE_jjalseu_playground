import ArrayEmptyError from "@/app/_customError/ArrayEmptyError";
import NullOrUndefinedError from "@/app/_customError/NullOrUndefinedError";
import ApiError from "@/app/services/ApiError";

// 에러 발생시 정보(메시지, 에러 발생 시 실행할 함수)를 담당하는 인터페이스
interface IErrorInfo {
    // API 에러
    api?: Info;
    // 배열이 비어있는 경우
    arrayEmpty?: Info;
    // 데이터가 null 또는 undefined인 경우
    nullOrUndefined?: Info;
}

interface Info {
    message: string;
    action?: () => void;
}

type ErrorClass =
    | ApiError
    | ArrayEmptyError
    | NullOrUndefinedError;

// 에러 핸들링 공통 메서드 추출
function handleSpecificError(
    error: ErrorClass,
    message?: string,
    action?: () => void,
): void {
    error.getDetailsLog(message);
    if (action) action();
}

// 에러별 처리를 담당하는 함수
// catch 문에서 종합적으로 error 핸들링하는 함수
function handleError(
    error: unknown,
    errorInfo: IErrorInfo,
) {
    if (error instanceof ApiError) {
        handleSpecificError(
            error,
            errorInfo.api?.message,
            errorInfo.api?.action,
        );
    } else if (error instanceof ArrayEmptyError) {
        handleSpecificError(
            error,
            errorInfo.arrayEmpty?.message,
            errorInfo.arrayEmpty?.action,
        );
    } else if (error instanceof NullOrUndefinedError) {
        handleSpecificError(
            error,
            errorInfo.nullOrUndefined?.message,
            errorInfo.nullOrUndefined?.action,
        );
    } else if (error instanceof TypeError) {
        console.error(`네트워크 에러 발생 ${error}\n
                다음과 같은 사항을 확인해주세요.
                - 네트워크 연결을 확인해주세요.
                - API 엔드포인트가 유효한지 확인해주세요.
                - CORS 정책을 확인해주세요.
                `);
    } else {
        console.error("알 수 없는 에러 발생", error);
    }
}

export default handleError;
