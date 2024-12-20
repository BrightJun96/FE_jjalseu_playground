import React from 'react';

// 이모지 컨테이너
function EmojiContainer({
    children
                        }:{
    children: React.ReactNode
}) {
    return (
        <span
            className={"text-[100px] text-center"}
        >
            {children}
        </span>
    );
}

export default EmojiContainer;
