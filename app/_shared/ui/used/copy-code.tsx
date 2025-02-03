"use client";

import { useEffect } from "react";

function addCopyButtons() {
    document
        .querySelectorAll("pre")
        .forEach((preElement) => {
            // 기존 버튼이 있는 경우 중복 추가 방지
            if (preElement.querySelector(".copy-btn"))
                return;

            const button = document.createElement("button");
            button.innerText = "COPY";
            button.className = "copy-btn";
            button.onclick = () => {
                const codeText = preElement.innerText;
                navigator.clipboard.writeText(codeText);
                button.innerText = "COPY ☑️";
                setTimeout(
                    () => (button.innerText = "COPY"),
                    1500,
                );
            };

            // 버튼 스타일 적용
            button.style.position = "absolute";
            button.style.top = "8px";
            button.style.right = "8px";
            button.style.background = "#ffcc00";
            button.style.color = "#000";
            button.style.border = "none";
            button.style.padding = "5px 10px";
            button.style.fontSize = "12px";
            button.style.cursor = "pointer";
            button.style.borderRadius = "4px";

            // pre 태그를 감싸는 div가 있어야 스타일 적용 가능
            const wrapper = document.createElement("div");
            wrapper.style.position = "relative";
            preElement.parentNode?.insertBefore(
                wrapper,
                preElement,
            );
            wrapper.appendChild(preElement);
            wrapper.appendChild(button);
        });
}

export default function CopyCode() {
    useEffect(() => {
        addCopyButtons();
    }, []);

    return null; // UI를 렌더링하지 않는 클라이언트 컴포넌트
}
