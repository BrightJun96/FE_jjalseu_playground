import {quizApiHandler} from "@/app/services/quiz/QuizApiHandler";
import {Metadata} from "next";
import React from 'react';

export async function generateStaticParams() {

    const {data} = await quizApiHandler.fetchQuizDetailUrlList();

    return data.map((url) => ({detailUrl:url}))

}

// SEO를 위해 메타데이터(title, description) 설정
export async function generateMetadata({
                                           params
                                       }:{
    params:{
        detailUrl:string
    }
}):Promise<Metadata>{

    const detailUrl = (await params).detailUrl

    const {data} = await quizApiHandler.fetchQuizDetailByUrl(detailUrl)

    return {
        title:`해설-${data.metaTitle}`,
        description: `해설-${data.metaDescription}`,
        alternates:{
            canonical:`/quiz/explanation/${data.detailUrl}`
        }
    }
}


async function Page({
                        params
                    }:{
    params:{
        detailUrl:string
    }
}) {

    const { detailUrl } = await params
    const {data} = await quizApiHandler.fetchQuizDetailByUrl(detailUrl)


    return (
        <>
            <h1>해설</h1>
            <div dangerouslySetInnerHTML={{__html:data.explanation}}></div>
        </>
    );
}

export default Page;
