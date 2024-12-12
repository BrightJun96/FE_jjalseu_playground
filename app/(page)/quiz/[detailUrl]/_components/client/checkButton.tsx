import React from 'react';

// 채점 버튼(채점 전, 채점 후 버튼 포함)
function CheckButton({
                    children
                     }:{
    children: React.ReactNode,
                     }) {
    return (
        <>
            {children}
        </>
        );
}

export default CheckButton;
