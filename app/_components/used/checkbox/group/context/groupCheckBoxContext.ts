import { primitive } from "@/app/_types/primitive";
import {
    createContext,
    Dispatch,
    SetStateAction,
} from "react";

// 그룹 체크박스 컨텍스트
const GroupCheckBoxContext = createContext<{
    checkedList: primitive[];
    setCheckedList: Dispatch<SetStateAction<primitive[]>>;
} | null>(null);

export default GroupCheckBoxContext;
