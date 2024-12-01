import React, {useEffect} from "react";
import useHandleModal from "@/app/_components/modal/useHandleModal";

// 모달 백그라운드 레이아웃
const ModalBackgroundLayout = ({
  children
                               }:{
  children?: React.ReactNode;
}) => {

 const {handleBackgroundClick}= useHandleModal()


  return (
    <div
      className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black/30"
      role={"button"}
      tabIndex={0}
      onClick={handleBackgroundClick}
    >
      {children}
    </div>
  );
};

export default ModalBackgroundLayout;
