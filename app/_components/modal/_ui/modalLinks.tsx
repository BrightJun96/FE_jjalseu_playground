import PrimaryLink from "@/app/_components/link/primaryLink";
import {ModalContext} from "@/app/_components/modal/_context/modalContext";
import React, {useContext} from 'react';

// 모달 링크
function ModalLinks() {

    const modal = useContext(ModalContext)

    return (
        modal.links&&
        modal.links
                .map((link,index) =>
                <PrimaryLink
                    key={index}
                    href={link.href}
                    color={link.color}
                >
                    {link.text}
                </PrimaryLink>
            )
    );
}

export default ModalLinks;
