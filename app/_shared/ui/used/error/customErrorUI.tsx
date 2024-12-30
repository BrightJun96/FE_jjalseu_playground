import EmojiContainer from "@/app/(page)/quiz/(page)/[detailUrl]/_components/client/modal/emojiContainer";
import ErrorContainer from "@/app/_shared/ui/used/error/components/errorContainer";
import ErrorMessage from "@/app/_shared/ui/used/error/components/errorMessage";
import ErrorTitle from "@/app/_shared/ui/used/error/components/errorTitle";
import React from "react";

// 에러 발생시,보여줄 컴포넌트
function CustomErrorUI({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ErrorContainer>
            {/*타이틀*/}
            <ErrorTitle>에러 발생!</ErrorTitle>
            {/*이모지*/}
            <EmojiContainer>🥺</EmojiContainer>
            {/*에러 메시지*/}
            <ErrorMessage>{children}</ErrorMessage>
        </ErrorContainer>
    );
}

export default CustomErrorUI;
