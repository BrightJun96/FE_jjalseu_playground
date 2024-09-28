// import React, { useEffect } from "react";
// import { useAtom, useAtomValue, useSetAtom } from "jotai/index";
// import { modalAtom } from "@/app/_store/modal/modal";
// import { createFeedback } from "@/app/api/feedback/instance.server";
// import { feedbackText } from "@/app/_store/feedback";
//
// const useHandleModal = () => {
//   const { onConfirm,contentType } = useAtomValue(modalAtom);
//   const [feedback,setFeedback]= useAtom(feedbackText)
//
//   const setModal = useSetAtom(modalAtom);
//
//   // 모달 닫기
//   function closeModal() {
//     setModal((prev) => ({ ...prev, isOpen: false }));
//   }
//
//   // 확인
//   async function handleConfirm() {
//
//     // contentType이 feedback일 경우, feedbackText 전송
//     // if(contentType === "feedback"){
//     //   const response =   await createFeedback(feedback)
//     //   console.log("response",response);
//     //   if(response.isSuccess){
//     //     setModal((prev) => ({ ...prev, onlyConfirm:true,
//     //       title: "피드백이 전송되었습니다.",
//     //       content:<div className={"flex flex-col items-center justify-center"}>
//     //         <p>피드백 감사합니다.</p>
//     //        <p> 최선을 다하는 comma-x가 되겠습니다.</p>
//     //     </div>,
//     //
//     //       modalContainerClassName:"",
//     //       confirmText:"확인",
//     //     }));
//     //     // setFeedback("")
//     //     return
//     //   }
//     // }
//
//     if (onConfirm) {
//       onConfirm();
//     }
//
//
//
//
//     closeModal();
//   }
//
//   // 취소
//   function handleCancel() {
//     closeModal();
//   }
//
//   // 배경 클릭 시 모달 닫기
//   function handleBackgroundClick() {
//     closeModal();
//   }
//
//   // 모달 내용 클릭 시 이벤트 전파 막기
//   function handleContentClick(e: React.MouseEvent) {
//     e.stopPropagation();
//   }
//
//   function handleKeyDown(e: React.KeyboardEvent) {
//     e.stopPropagation();
//   }
//
//   // Escape 키를 눌렀을 때 모달 닫기
//   useEffect(() => {
//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (event.key === "Escape") {
//         closeModal();
//       }
//     };
//
//     window.addEventListener("keydown", handleKeyDown);
//
//     // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, []); // 빈 의존성 배열을 전달하여 이 훅이 컴포넌트가 마운트될 때만 실행되게 함
//   return { closeModal, handleConfirm, handleCancel, handleBackgroundClick, handleContentClick, handleKeyDown };
// };
//
// export default useHandleModal;
