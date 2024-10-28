"use client";

import React from "react";
import {initialModalContextValue, ModalContext, ModalContextProps, ModalSetContext} from "@/app/_context/modalContext";
import ModalBackgroundLayout from "@/app/_components/modal/_ui/modalBackgorundLayout";
import Modal from "@/app/_components/modal/modal";

const ModalProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  const [modal, setModal] = React.useState<ModalContextProps>(initialModalContextValue)


  return (
  <ModalContext.Provider value={modal}>
    <ModalSetContext.Provider value={setModal}>
      {children}
      {modal.isOpen &&
          <ModalBackgroundLayout>
            <Modal/>
          </ModalBackgroundLayout>
      }
    </ModalSetContext.Provider>
  </ModalContext.Provider>
  );
};

export default ModalProvider;
