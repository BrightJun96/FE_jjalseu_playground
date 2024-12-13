import React from 'react';

// 모달 버튼 컨테이너
function ModalButtonContainer({
                                  children
}:{
    children:React.ReactNode
}) {
    return (
        <div className={"flex justify-center gap-2"}>
            {children}
        </div>
    );
}

export default ModalButtonContainer;
