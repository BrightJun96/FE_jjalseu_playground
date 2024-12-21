import PrimaryLink from "@/app/_components/link/primaryLink";
import { ModalContext } from "@/app/_components/modal/_context/modalContext";
import React, {
    useContext,
    useEffect,
    useRef,
} from "react";

// 모달 링크
function ModalLinks() {
    const modal = useContext(ModalContext);

    const firstLinkRef = useRef<null | HTMLAnchorElement>(
        null,
    ); // 첫 번째 링크를 참조하기 위한 ref

    useEffect(() => {
        // 모달 링크가 열릴 때 첫 번째 링크에 포커스 설정
        if (firstLinkRef.current) {
            firstLinkRef.current.focus();
        }
    }, [modal.links]); // 링크 배열이 변경될 때마다 실행

    return (
        modal.links &&
        modal.links.map((link, index) => (
            <PrimaryLink
                tabIndex={1}
                key={index}
                href={link.href}
                color={link.color}
                ref={index === 0 ? firstLinkRef : null} // 첫 번째 링크에만 ref 연결
            >
                {link.text}
            </PrimaryLink>
        ))
    );
}

export default ModalLinks;
