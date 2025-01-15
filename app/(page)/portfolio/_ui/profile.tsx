import Template from "@/app/(page)/portfolio/_ui/template";
import React from "react";

function Profile() {
    return (
        <Template id={"profile"}>
            <span className={"text-headline2"}>
                Profile
            </span>
            <div
                className={"h-[700px] bg-orange-200"}
            ></div>
        </Template>
    );
}

export default Profile;
