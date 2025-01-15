import Main from "@/app/(page)/portfolio/_ui/main";
import Profile from "@/app/(page)/portfolio/_ui/profile";
import React from "react";

function Page() {
    return (
        <div className={"h-full flex flex-col w-full"}>
            <Main />
            <Profile />
        </div>
    );
}

export default Page;
