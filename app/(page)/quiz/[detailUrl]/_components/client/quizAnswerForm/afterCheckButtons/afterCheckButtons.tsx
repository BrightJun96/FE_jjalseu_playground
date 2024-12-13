import AfterCheckButtonContainer
    from "@/app/(page)/quiz/[detailUrl]/_components/client/quizAnswerForm/afterCheckButtons/afterCheckButtonContainer";
import ExplanationLink
    from "@/app/(page)/quiz/[detailUrl]/_components/client/quizAnswerForm/afterCheckButtons/explanationLink";
import NextQuizLink
    from "@/app/(page)/quiz/[detailUrl]/_components/client/quizAnswerForm/afterCheckButtons/nextQuizLink";
import React from 'react';

// 채점 후 버튼(해설, 다음문제)
function AfterCheckButtons() {


    return (
        <AfterCheckButtonContainer>
             {/*해설 링크*/}
             <ExplanationLink/>
             {/*다음 문제 링크*/}
             <NextQuizLink/>
        </AfterCheckButtonContainer>
    );
}

export default AfterCheckButtons;
