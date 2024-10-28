"use client"

import React, {useContext} from 'react';
import ModalBackgroundLayout from "@/app/_components/modal/_ui/modalBackgorundLayout";
import PrimaryButton from "@/app/_components/button/primaryButton";
import {ModalContext, ModalSetContext} from "@/app/_context/modalContext";
import ModalContentContainer from "@/app/_components/modal/_ui/modalContentContainer";

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
                    <p className={"text-center"}>
                        {
                            modal.modalContent
                        }
                    </p>}
                <div className={"flex justify-center gap-2"}>
                    <PrimaryButton
                        onClick={modal.button.cancel.onClick}
                        text={modal.button.cancel.text} color={"primarySecondary"}/>
                    <PrimaryButton
                        onClick={modal.button.confirm.onClick}
                        text={modal.button.confirm.text}
                        color={"primary"}/>
                </div>
          </ModalContentContainer>
        </ModalBackgroundLayout>
    );
}

export default Modal;
