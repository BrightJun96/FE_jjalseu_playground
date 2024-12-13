import React from 'react';

// 돌아가기, 다음 문제 버튼 컨테이너
function ButtonContainer({children}:{
    children:React.ReactNode
}) {
    return (
        <div className={"flex gap-2 justify-center"}>
            {children}
        </div>
    );
}

export default ButtonContainer;
