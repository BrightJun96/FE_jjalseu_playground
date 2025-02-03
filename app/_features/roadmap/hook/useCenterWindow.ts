import { useEffect, useState } from "react";

function useCenterWindow() {
    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        });

        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () =>
            window.removeEventListener(
                "resize",
                handleResize,
            );
    }, []);
    return dimensions;
}

export default useCenterWindow;
