"use client"

import PrimaryButton from "@/app/_components/button/primaryButton";
import ModalBackgroundLayout from "@/app/_components/modal/_ui/modalBackgorundLayout";
import ModalContentContainer from "@/app/_components/modal/_ui/modalContentContainer";
import {ModalContext} from "@/app/_context/modalContext";
import React, {useContext} from 'react';


// 모달 컴포넌트
function Modal() {

    const modal = useContext(ModalContext)

    return (
        <ModalBackgroundLayout>
            <ModalContentContainer>
                {modal.modalTitle&&
                    <h1 className={"text-center text-title2Bold sm:text-title3Bold"}>{
                        modal.modalTitle
                    }</h1>}
                {modal.modalContent&&
                    <div className={"text-center"}>
                        {
                            modal.modalContent
                        }
                    </div>}
                <div className={"flex justify-center gap-2"}>
                    { modal.button.cancel.isShow&&<PrimaryButton
                        onClick={modal.button.cancel.onClick}
                        color={"primarySecondary"}>
                        {modal.button.cancel.text}
                    </PrimaryButton>
                    }
                    <PrimaryButton
                        onClick={modal.button.confirm.onClick}
                        color={"primary"}>
                        {modal.button.confirm.text}
                    </PrimaryButton>
                </div>
          </ModalContentContainer>
        </ModalBackgroundLayout>
    );
}

export default Modal;
