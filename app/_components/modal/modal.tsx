// "use client";
// import { useAtom, useAtomValue } from "jotai/index";
// import React from "react";
// import { modalAtom } from "@/app/_store/modal/modal";
// import useHandleModal from "@/app/_components/ui/modal/useHandleModal";
// import PrimaryButton from "@/app/_components/ui/button/primaryButton";
// import { feedbackText } from "@/app/_store/feedback";
// import ModalBackgroundLayout from "@/app/_components/ui/modal/_ui/modalBackgorundLayout";
//
// const Modal = () => {
//   const { title, content, onlyConfirm, buttonColor,confirmText,modalContainerClassName,contentType,isButtons } = useAtomValue(modalAtom);
//
//   const { handleConfirm, handleCancel, handleBackgroundClick, handleContentClick, handleKeyDown } = useHandleModal();
//   const feedback= useAtomValue(feedbackText)
//   const feedbackDisabledCondition = contentType==="feedback"&&!feedback
//   return (
//     <ModalBackgroundLayout>
//       {/*모달 컨테이너*/}
//       <div
//         className={
//           `relative flex min-h-[173px] w-[320px] flex-col rounded-[12px] bg-achromatic-white p-[24px] text-achromatic-dark shadow-lg sm:w-[280px] ${modalContainerClassName}`
//         }
//         role={"button"}
//         tabIndex={0}
//         onClick={handleContentClick}
//         onKeyDown={handleKeyDown}
//       >
//         {/*제목*/}
//         {title && <h1 className={"text-center text-title2Bold sm:text-title3Bold"}>{title}</h1>}
//         {/*내용*/}
//         <div className={"mt-[12px] flex items-center justify-center text-body"}>{content}</div>
//         {/*버튼*/}
//         {isButtons&&<div className={"absolute bottom-0 left-0 flex w-full justify-center rounded-b-[12px]"}>
//           {!onlyConfirm && (
//             <PrimaryButton
//               onClick={handleCancel}
//               className={"h-[48px] flex-1 rounded-r-none rounded-t-none sm:h-[40px] sm:w-[140px]"}
//               color={"whiteSub"}
//               type={"button"}
//               text={"취소"}
//             />
//           )}
//           <PrimaryButton
//             onClick={handleConfirm}
//             text={confirmText}
//             className={`h-[48px] flex-1 rounded-t-none sm:h-[40px] sm:w-[140px] ${!onlyConfirm && "rounded-l-none"}`}
//             type={"button"}
//             color={buttonColor}
//             disabled={feedbackDisabledCondition}
//           />
//         </div>}
//       </div>
//     </ModalBackgroundLayout>
//   );
// };
//
// export default Modal;
