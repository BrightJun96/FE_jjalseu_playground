import PrimaryButton from "@/app/_components/used/button/primaryButton";
import { ModalContext } from "@/app/_components/used/modal/_context/modalContext";
import React, { useContext } from "react";

// 취소 버튼
function CancelButton() {
    const modal = useContext(ModalContext);

    return (
        modal.button.cancel.isShow && (
            <PrimaryButton
                onClick={modal.button.cancel.onClick}
                color={"primarySecondary"}
            >
                {modal.button.cancel.text}
            </PrimaryButton>
        )
    );
}

export default CancelButton;
