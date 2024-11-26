// 퀴즈 페이지에서 사용할 헬퍼 함수들
import {ArrayUtils} from "@/app/_utils/function/ArrayUtils";

class QuizHelper{

    // 배열에서 랜덤한 요소를 반환
    pickRandomOne<T>(arr: T[]): T  {
            if (arr.length === 0) {
                throw new Error("배열이 비어있습니다. 랜덤 선택이 불가능합니다.");
            }

        return ArrayUtils.pickRandomOne(arr);
    }
}

const quizHelper = new QuizHelper();

export default quizHelper;
