import {ModalContext} from "@/app/_context/modalContext";
import React, {useContext} from 'react';

// 모달 타이틀
function ModalTitle() {
    const modal = useContext(ModalContext)

    return (
        modal.modalTitle &&
        <h1
            className={"text-center text-title2Bold sm:text-title3Bold"}
        >
            {modal.modalTitle}
        </h1>
    );
}

export default ModalTitle;
