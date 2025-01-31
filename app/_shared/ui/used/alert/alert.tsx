import { Alert as NextUiAlert } from "@nextui-org/alert";
import React from "react";

interface IAlert {
    color?:
        | "default"
        | "primary"
        | "secondary"
        | "success"
        | "warning"
        | "danger";
    title?: string;
}
function Alert({ color = "success", title = "" }: IAlert) {
    return (
        <div
            className={
                "fixed w-full left-0 bottom-10 lg:px-[400px] md:px-[200px] sm:px-[10px]"
            }
        >
            <NextUiAlert
                // variant={"faded"}
                color={color}
                title={title}
            />
        </div>
    );
}

export default Alert;
