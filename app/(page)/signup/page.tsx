import React from 'react';
import SignupForm from "@/app/(page)/signup/_ui/signupForm";
import InnerContainer from "@/app/_layout/innerContainer";

const Page = async () => {

    return (
        <InnerContainer>
            <SignupForm/>
        </InnerContainer>
    );
};

export default Page;
