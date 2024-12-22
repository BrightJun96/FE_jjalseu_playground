import CheckBoxHandler from "@/app/_components/used/checkbox/group/class/CheckBoxHandler";
import useGroupCheckContext from "@/app/_components/used/checkbox/group/context/useGroupCheckContext";

// 체크박스 그룹 핸들러 훅
function useHandleGroupCheckBox(isMultiSelect: boolean) {
    const groupCheckState = useGroupCheckContext();

    const { groupCheckHandler } = new CheckBoxHandler(
        groupCheckState,
        isMultiSelect,
    );

    return groupCheckHandler;
}

export default useHandleGroupCheckBox;
