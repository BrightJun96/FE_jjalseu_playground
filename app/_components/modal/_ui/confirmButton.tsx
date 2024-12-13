import PrimaryButton from "@/app/_components/button/primaryButton";
import {ModalContext} from "@/app/_context/modalContext";
import React, {useContext} from 'react';

// 확인 버튼
function ConfirmButton() {

    const modal = useContext(ModalContext)

    return (
        <PrimaryButton
            onClick={modal.button.confirm.onClick}
            color={"primary"}>
            {modal.button.confirm.text}
        </PrimaryButton>
    );
}

export default ConfirmButton;
