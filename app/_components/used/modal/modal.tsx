"use client";

import { ModalContext } from "@/app/_components/used/modal/_context/modalContext";
import CancelButton from "@/app/_components/used/modal/_ui/cancelButton";
import ConfirmButton from "@/app/_components/used/modal/_ui/confirmButton";
import ModalBackgroundLayout from "@/app/_components/used/modal/_ui/modalBackgorundLayout";
import ModalButtonContainer from "@/app/_components/used/modal/_ui/modalButtonContainer";
import ModalContent from "@/app/_components/used/modal/_ui/modalContent";
import ModalContentContainer from "@/app/_components/used/modal/_ui/modalContentContainer";
import ModalLinks from "@/app/_components/used/modal/_ui/modalLinks";
import ModalTitle from "@/app/_components/used/modal/_ui/modalTitle";
import React, { useContext } from "react";

// 모달 컴포넌트
function Modal() {
    const modal = useContext(ModalContext);

    return (
        <ModalBackgroundLayout>
            <ModalContentContainer>
                {/*타이틀*/}
                <ModalTitle />
                {/*컨텐츠*/}
                <ModalContent />
                {/*버튼*/}
                <ModalButtonContainer>
                    {modal.buttonType === "BUTTON" ? (
                        // 버튼 타입
                        <>
                            {/*취소 버튼*/}
                            <CancelButton />
                            {/*확인 버튼*/}
                            <ConfirmButton />
                        </>
                    ) : (
                        // 링크 타입
                        <ModalLinks />
                    )}
                </ModalButtonContainer>
            </ModalContentContainer>
        </ModalBackgroundLayout>
    );
}

export default Modal;
