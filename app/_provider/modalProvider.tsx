"use client";

import React from "react";
import {ModalContext, ModalContextProps, ModalSetContext} from "@/app/_context/modalContext";

const ModalProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  const [modal, setModal] = React.useState<ModalContextProps>({
    isOpen:false
  })


  return (
  <ModalContext.Provider value={modal}>
    <ModalSetContext.Provider value={setModal}>
    <div className={"w-screen"}>
      {children}
    </div>
    </ModalSetContext.Provider>
  </ModalContext.Provider>
  );
};

export default ModalProvider;
