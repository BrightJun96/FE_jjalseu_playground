import { primitive } from "@/app/_shared/types/primitive";
import {
    createContext,
    Dispatch,
    SetStateAction,
} from "react";

// 그룹 체크박스 컨텍스트 상태 타입
export interface GroupCheckBoxContextStateType {
    checkedList: primitive[];
    setCheckedList: Dispatch<SetStateAction<primitive[]>>;
}

// 그룹 체크박스 컨텍스트
const GroupCheckBoxContext =
    createContext<GroupCheckBoxContextStateType | null>(
        null,
    );

export default GroupCheckBoxContext;
