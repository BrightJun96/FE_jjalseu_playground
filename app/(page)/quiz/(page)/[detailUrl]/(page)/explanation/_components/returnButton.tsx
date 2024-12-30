import PATHS from "@/app/_shared/constants/paths";
import PrimaryLink from "@/app/_shared/ui/used/link/primaryLink";
import React from "react";

// 돌아가기 버튼
function ReturnButton({
    returnUrl,
}: {
    returnUrl: string;
}) {
    return (
        <PrimaryLink
            tabIndex={1}
            color={"primarySecondary"}
            href={`/${PATHS.QUIZ_DETAIL(returnUrl)}`}
        >
            돌아가기
        </PrimaryLink>
    );
}

export default ReturnButton;
