import CheckBoxGroupController from "@/app/_shared/ui/used/checkbox/group/class/CheckBoxGroupController";
import useGroupCheckContext from "@/app/_shared/ui/used/checkbox/group/context/useGroupCheckContext";

// 체크박스 그룹 핸들러 훅
function useHandleGroupCheckBox(isMultiSelect: boolean) {
    const groupCheckState = useGroupCheckContext();

    const { groupCheckHandler } =
        new CheckBoxGroupController(
            groupCheckState,
            isMultiSelect,
        );

    return groupCheckHandler;
}

export default useHandleGroupCheckBox;
