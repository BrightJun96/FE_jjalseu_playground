"use client"

import React from 'react';
import {QuizListResponse} from "@/app/services/quiz/types";
import useQueryString from "@/app/_utils/hooks/useQueryString";
import PrimaryButton from "@/app/_components/button/primaryButton";
import Link from "next/link";
import Pagination from "@/app/_components/pagination/pagination";
import 'prismjs/themes/prism.css';
import MultipleChoiceContents from "@/app/(page)/quiz/details/components/client/multiChoiceContents/multipleChoiceContents";

const QuizDetails = ({
    quizData
                     }:{quizData:QuizListResponse}) => {


    const {
        getQueryString
    } = useQueryString()


    const quizOrder = Number(getQueryString("order")??1)

    const quizDetailsData = quizData.quizList[quizOrder-1]


    return (
        <div>

            <h1
                dangerouslySetInnerHTML={{__html: quizDetailsData.questionTitle}}
            />

            {/*퀴즈내용*/}
            <div
                dangerouslySetInnerHTML={{__html: quizDetailsData.questionContent}}
            ></div>

            {/*객관식인 경우, 객관시 문제 5게*/}
            {quizDetailsData.type==="MULTIPLE_CHOICE"&&
            <MultipleChoiceContents multipleChoiceContents={quizDetailsData.multipleChoices}/>
            }

            <div className={"flex gap-1"}>
                <Link href={`/quiz/details?order=${quizOrder - 1}`}>
                    <PrimaryButton text={"이전"} color={"primary"}/>
                </Link>
                <Link href={`/quiz/details?order=${quizOrder + 1}`}>
                    <PrimaryButton text={"다음"} color={"primarySecondary"}/>
                </Link>
            </div>
            <Pagination totalPage={quizData.quizList.length} queryKey={"order"}/>
        </div>
    );
};

export default QuizDetails;
