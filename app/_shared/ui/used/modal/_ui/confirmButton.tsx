import PrimaryButton from "@/app/_shared/ui/used/button/primaryButton";
import { ModalContext } from "@/app/_shared/ui/used/modal/_context/modalContext";
import React, { useContext } from "react";

// 확인 버튼
function ConfirmButton() {
    const modal = useContext(ModalContext);

    return (
        <PrimaryButton
            onClick={modal.button.confirm.onClick}
            color={"primary"}
        >
            {modal.button.confirm.text}
        </PrimaryButton>
    );
}

export default ConfirmButton;
