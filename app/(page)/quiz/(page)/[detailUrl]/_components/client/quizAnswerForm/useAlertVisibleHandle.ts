import { useState } from "react";

function useAlertVisibleHandle() {
    const [isAlertVisible, setIsAlertVisible] =
        useState<boolean>(false);

    function alertVisibleHandle() {
        setIsAlertVisible(true);
        setTimeout(() => {
            setIsAlertVisible(false);
        }, 2000);
    }
    return { alertVisibleHandle, isAlertVisible };
}

export default useAlertVisibleHandle;
