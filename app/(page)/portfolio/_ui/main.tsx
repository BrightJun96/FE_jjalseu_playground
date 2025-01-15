import React from "react";

function Main() {
    return (
        <div className={"min-h-screen flex"}>
            <section
                className={
                    "w-full flex flex-col items-center justify-center"
                }
            >
                <div className={"flex flex-col gap-5"}>
                    <p className={"text-headline3"}>
                        개발 환경 개선을 좋아하는
                    </p>
                    <p
                        className={
                            "text-headline3 lg:pl-[200px]"
                        }
                    >
                        풀스택 개발자 김철준입니다.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Main;
