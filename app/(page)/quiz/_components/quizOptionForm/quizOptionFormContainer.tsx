"use client"

import useQuizOptionFormAction from "@/app/(page)/quiz/_hook/useQuizOptionFormAction";
import React from 'react';

// 폼 컨테이너
function QuizOptionFormContainer({
    children
                                 }:{
    children:React.ReactNode
}) {

    const {formAction} =useQuizOptionFormAction()

    return (
        <form
            className={"w-full"}
            action={formAction}
        >
            {children}
        </form>
    );
}

export default QuizOptionFormContainer;
