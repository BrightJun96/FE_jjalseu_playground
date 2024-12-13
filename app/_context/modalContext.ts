import {createContext} from "react";

/**
 * Modal Context
 */
export interface ModalLinkType{
    href:string
    text:string
    color?:"primary"|"primarySecondary"
}

export interface ModalContextProps{
    isOpen:boolean // 모달 오픈 여부
    modalContent?:React.ReactNode|null // 모달 컨텐츠
    modalTitle?:React.ReactNode|null // 모달 타이틀
    buttonType:"BUTTON"|"LINK" ,// 버튼 타입
    // 링크
    links?:ModalLinkType[]
    // 버튼
    button:{
        confirm:{
            text:string
            onClick:()=>void
        },
        cancel:{
            isShow:boolean
            text:string
            onClick:()=>void
        }
    }
}

// 모달 초깃값
export const initialModalContextValue:ModalContextProps = {
    isOpen:false,
    modalContent:null,
    modalTitle:null,
    buttonType:"BUTTON",
    button:{
        confirm:{
            text:"확인",
            onClick:()=>{}
        },
        cancel:{
            isShow:true,
            text:"취소",
            onClick:()=>{}
        }
    }
}

export const ModalContext = createContext<ModalContextProps>(initialModalContextValue)

export const ModalSetContext = createContext<React.Dispatch<React.SetStateAction<ModalContextProps>>>(() => {})
