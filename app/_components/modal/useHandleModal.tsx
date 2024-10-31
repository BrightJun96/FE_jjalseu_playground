import React, {useContext, useEffect} from "react";
import {initialModalContextValue, ModalContext, ModalSetContext} from "@/app/_context/modalContext";


const useHandleModal = () => {

   const setModal =  useContext(ModalSetContext)
   const modalValue = useContext(ModalContext)

    console.log("modalValue",modalValue)
    // 모달 초기화
    function handleInitModal() {
        setModal(initialModalContextValue);
    }


    // 모달 열기
     function handleOpenModal() {
        setModal((prev) =>({
            ...prev,
            isOpen: true,

        }));
    }


  // 모달 컨텐츠 정하가
    function handleSetModalContent({title,content}:{title:React.ReactNode,content:React.ReactNode}) {
        setModal((prev) =>({
        ...prev,
            modalTitle:title,
        modalContent: content,
        }));
    }

  // 버튼 내용
     function handleSetModalButtonContent({confirm,cancel}:{confirm:{text:string,onClick:()=>void},cancel:{isShow:boolean,text:string,onClick:()=>void}}) {
        setModal((prev) =>({
        ...prev,
        button:{
            confirm,
            cancel
        }
        }));
     }


  // 모달 닫기
  function closeModal() {
      handleInitModal()
  }

  // 확인
  async function handleConfirm() {



    modalValue.button.confirm.onClick()


      handleInitModal();
  }

  // 취소
  function handleCancel() {
      handleInitModal();
  }

  // 배경 클릭 시 모달 닫기
  function handleBackgroundClick() {
      handleInitModal();
  }

  // 모달 내용 클릭 시 이벤트 전파 막기
  function handleContentClick(e: React.MouseEvent) {
    e.stopPropagation();
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    e.stopPropagation();
      if (e.key === "Escape") {
          closeModal();
      }
  }


  // // Escape 키를 눌렀을 때 모달 닫기
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []); // 빈 의존성 배열을 전달하여 이 훅이 컴포넌트가 마운트될 때만 실행되게 함
  return {  handleBackgroundClick,handleInitModal,handleOpenModal,handleSetModalContent,handleSetModalButtonContent };
};

export default useHandleModal;
