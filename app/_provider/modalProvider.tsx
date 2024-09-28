// "use client";
//
// import React from "react";
// import Modal from "../_components/ui/modal/modal";
// import { useAtomValue } from "jotai/index";
// import { modalAtom } from "@/app/_store/modal/modal";
//
// const ModalProvider = ({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) => {
//   const { isOpen } = useAtomValue(modalAtom);
//
//   return (
//     <div className={"w-screen"}>
//       {isOpen && <Modal />}
//       {children}
//     </div>
//   );
// };
//
// export default ModalProvider;
