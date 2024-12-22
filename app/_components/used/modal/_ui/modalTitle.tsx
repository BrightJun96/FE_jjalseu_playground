import { ModalContext } from "@/app/_components/used/modal/_context/modalContext";
import React, { useContext } from "react";

// 모달 타이틀
function ModalTitle() {
    const modal = useContext(ModalContext);

    return (
        modal.modalTitle && (
            <h1 className={"text-center text-title1"}>
                {modal.modalTitle}
            </h1>
        )
    );
}

export default ModalTitle;
