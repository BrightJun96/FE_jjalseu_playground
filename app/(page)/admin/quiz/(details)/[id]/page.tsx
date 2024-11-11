import QuizDetailsForm from "@/app/(page)/admin/quiz/(details)/_components/client/form/quizDetailsForm";
import NetworkError from "@/app/_components/network/error/networkError";
import AdminQuizApi from "@/app/services/quiz/admin/api.instance";
import React from 'react';

/**
 * 퀴즈 관리 페이지-상세
 */
async function Page({
    params
                    }:{
    params:{
        id:string
    }
}) {
    const {id} = (await params)

   const response =  await AdminQuizApi.fetchQuizDetail(Number(id))

    return (
        <>{response.isSuccess?
            <QuizDetailsForm detailsData={response.data}/>
            :
            <NetworkError/>}</>
    );
}

export default Page;
