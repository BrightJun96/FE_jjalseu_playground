import PATHS from "@/app/_shared/constants/paths";
import PrimaryLink from "@/app/_shared/ui/used/link/primaryLink";
import { useParams } from "next/navigation";
import React from "react";

// 해설 링크
function ExplanationLink() {
    const { detailUrl } = useParams();
    return (
        <PrimaryLink
            tabIndex={2}
            color={"primarySecondary"}
            href={`/${PATHS.QUIZ_EXPLANATION(detailUrl as string)}`}
        >
            해설
        </PrimaryLink>
    );
}

export default ExplanationLink;
