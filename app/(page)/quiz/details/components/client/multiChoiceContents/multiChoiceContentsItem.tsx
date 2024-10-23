import React from 'react';
import {MultipleChoiceContent} from "@/app/services/quiz/types";


interface MultiChoiceContentsItemProps {
    content:MultipleChoiceContent
    onChange:(v:CheckHandlerProps) => void
}

export interface CheckHandlerProps {
    checked:boolean
    order:number
}

function MultiChoiceContentsItem({content,onChange}:MultiChoiceContentsItemProps) {


    function checkHandleChange(value:CheckHandlerProps){

        onChange(value)

    }

    return (
        <label
            className={"w-full flex cursor-pointer"}
        >
            <input
                type={"checkbox"}
                onChange={(e) =>checkHandleChange({checked:e.target.checked,order:content.number})}

            />
            <p>
                {content.number}. {content.content}
            </p>
        </label>
    );
}

export default MultiChoiceContentsItem;
