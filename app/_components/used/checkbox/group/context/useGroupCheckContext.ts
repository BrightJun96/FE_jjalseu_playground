import GroupCheckBoxContext from "@/app/_components/used/checkbox/group/context/groupCheckBoxContext";
import { useContext } from "react";

// 그룹 체크박스 컨텍스트 사용 훅
function useGroupCheckContext() {
    return useContext(GroupCheckBoxContext);
}

export default useGroupCheckContext;
