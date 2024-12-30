import useGroupCheckContext from "@/app/_shared/ui/used/checkbox/group/context/useGroupCheckContext";

// 체크된 리스트 조회 훅
function useGetCheckedList() {
    const groupCheckContext = useGroupCheckContext();

    return groupCheckContext
        ? groupCheckContext.checkedList
        : [];
}

export default useGetCheckedList;
