import {createContext} from "react";

/**
 * Modal Context
 */
export interface ModalContextProps{
    isOpen:boolean
}

export const ModalContext = createContext<ModalContextProps>({
    isOpen:false
})

export const ModalSetContext = createContext<React.Dispatch<React.SetStateAction<ModalContextProps>>>(() => {})
