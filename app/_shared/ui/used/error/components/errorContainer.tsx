import React from "react";

// 에러 UI 컨테이너
function ErrorContainer({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section
            className={
                "flex flex-col justify-center items-center"
            }
        >
            {children}
        </section>
    );
}

export default ErrorContainer;
