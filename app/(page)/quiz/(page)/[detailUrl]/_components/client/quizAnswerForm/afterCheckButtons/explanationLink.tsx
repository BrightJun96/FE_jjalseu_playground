import PrimaryLink from "@/app/_components/link/primaryLink";
import {useParams} from "next/navigation";
import React from 'react';

// 해설 링크
function ExplanationLink() {
    const {detailUrl} = useParams()
    return (
        <PrimaryLink
            color={"primarySecondary"}
            href={`/quiz/${detailUrl}/explanation`}>
            해설
        </PrimaryLink>
    );
}

export default ExplanationLink;
