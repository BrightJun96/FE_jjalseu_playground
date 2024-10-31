"use client"

import React from 'react';
import {QuizListResponse} from "@/app/services/quiz/types";
import useQueryString from "@/app/_utils/hooks/useQueryString";
import PrimaryButton from "@/app/_components/button/primaryButton";
import Link from "next/link";
import Pagination from "@/app/_components/pagination/pagination";
import 'prismjs/themes/prism.css';
import MultipleChoiceContents from "@/app/(page)/quiz/details/components/client/multiChoiceContents/multipleChoiceContents";
import GroupCheckBox from "@/app/_components/checkbox/groupCheckBox";
import useHandleModal from "@/app/_components/modal/useHandleModal";

const QuizDetails = ({
    quizData
                     }:{quizData:QuizListResponse}) => {


    // 힌트 노출 여부
    const [isHintVisible,setIsHintVisible] = React.useState<boolean>(false)
    const hintRef = React.useRef<HTMLDivElement>(null)

    const {
        getQueryString
    } = useQueryString()
   const {
        handleOpenModal,
       handleSetModalContent,
       handleSetModalButtonContent
   } = useHandleModal()



    const quizOrder = Number(getQueryString("order")??1)

    const quizDetailsData = quizData.quizList[quizOrder-1]


    // 채점
    function handleGetAnswer(){
    handleOpenModal()
    handleSetModalContent({
        title:"채점 결과",
        content:<div
        >
            정답입니다!
        </div>
    })

     handleSetModalButtonContent({
            confirm:{
                text:"다음문제",
                onClick:()=>{
                }
            },
            cancel:{
                isShow:true,
                text:"해설",
                onClick:()=>{
                }
            }
     })
    }

    return (
        <div>
            {/*제한시간*/}
            <div
                className={"flex justify-end"}
            >
                <span
                className={"text-title2Normal"}
                >제한시간 : {quizDetailsData.time}초</span>
            </div>
            {/*퀴즈 제목*/}
            <div
                className={"prose text-title2Normal"}
                dangerouslySetInnerHTML={{__html: quizDetailsData.title}}
            />

            {/*퀴즈내용*/}
            <div
                className={"prose"}
                dangerouslySetInnerHTML={{__html: quizDetailsData.content}}
            ></div>

            {/*객관식인 경우, 객관시 문제 5게*/}
            {quizDetailsData.type === "MULTIPLE_CHOICE" &&
                // <MultipleChoiceContents multipleChoiceContents={quizDetailsData.multipleChoices}/>
                <GroupCheckBox
                    options={quizDetailsData.multipleChoices.map((v) => ({label: `${v.number}. ${v.content}`, value: v.number}))}
                    direction={"col"}
                    isMultiSelect={false}
                    onChange={() => {
                    }}/>
            }

            <>
                <div
                    className={"flex justify-end"}
                >
                    <PrimaryButton
                        text={"힌트"}
                        color={"primarySecondary"}
                        className={"w-[60px] h-[25px] text-xs rounded-[24px]"}
                        onClick={() => {
                            if (hintRef.current) {
                                hintRef.current.togglePopover()
                            }
                        }}
                    />

                </div>
                {/*힌트*/}
                {
                    <div
                        ref={hintRef}
                        popover={"auto"}
                        className={"prose bg-black text-white min-w-[200px] min-h-[100px] rounded-[12px] p-[12px]"}
                        // dangerouslySetInnerHTML={{__html: quizDetailsData.hint}}

                    >
                        javascript에서 this는 함수가 호출될 때 결정된다. 함수가 호출될 때 결정된다는 것은 함수가 어떻게 호출되었느냐에 따라 this가 가리키는 대상이 달라진다는 것을
                        의미한다. this는 함수가 호출될 때 결정되기 때문에 함수를 선언할 때 결정되지 않는다. 함수를 선언할 때 결정되는 것은 this가 아니라 함수의 내용이다. 함수가 호출될
                        때 결정되는 this는 함수를 호출한 대상에 따라 달라진다. 함수를 호출할 때 this가 결정되는 규칙은 다음과 같다.
                    </div>
                }
            </>
            <div className={"flex justify-center gap-1"}>
                    <PrimaryButton
                        onClick={handleGetAnswer}
                        text={"채점"}
                        color={"primary"}/>
            </div>
            {/*<Pagination totalPage={quizData.quizList.length} queryKey={"order"}/>*/}
        </div>
    );
};

export default QuizDetails;
