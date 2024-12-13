"use client"

import CancelButton from "@/app/_components/modal/_ui/cancelButton";
import ConfirmButton from "@/app/_components/modal/_ui/confirmButton";
import ModalBackgroundLayout from "@/app/_components/modal/_ui/modalBackgorundLayout";
import ModalButtonContainer from "@/app/_components/modal/_ui/modalButtonContainer";
import ModalContent from "@/app/_components/modal/_ui/modalContent";
import ModalContentContainer from "@/app/_components/modal/_ui/modalContentContainer";
import ModalTitle from "@/app/_components/modal/_ui/modalTitle";
import {ModalContext} from "@/app/_context/modalContext";
import React, {useContext} from 'react';

// 모달 컴포넌트
function Modal() {

    const modal = useContext(ModalContext)

    return (
        <ModalBackgroundLayout>
            <ModalContentContainer>
                {/*타이틀*/}
                <ModalTitle/>
                {/*컨텐츠*/}
                <ModalContent/>
                {/*버튼*/}
                <ModalButtonContainer>
                    {/*취소 버튼*/}
                    <CancelButton/>
                    {/*확인 버튼*/}
                    <ConfirmButton/>
                </ModalButtonContainer>
          </ModalContentContainer>
        </ModalBackgroundLayout>
    );
}

export default Modal;
