import PrimaryLink from "@/app/_components/link/primaryLink";
import {ModalContext} from "@/app/_context/modalContext";
import React, {useContext} from 'react';

// 모달 링크
function ModalLink() {

    const modal = useContext(ModalContext)

    return (
        modal.link&&
        <PrimaryLink
            href={modal.link.href}
        >
            {modal.link.text}
        </PrimaryLink>
    );
}

export default ModalLink;
