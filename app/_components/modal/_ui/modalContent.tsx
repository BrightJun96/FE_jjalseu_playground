import {ModalContext} from "@/app/_components/modal/_context/modalContext";
import React, {useContext} from 'react';

// 모달 내용
function ModalContent() {

    const modal = useContext(ModalContext)

    return (
        modal.modalContent&&
        <div className={"text-center"}>
            {
                modal.modalContent
            }
        </div>
    );
}

export default ModalContent;
