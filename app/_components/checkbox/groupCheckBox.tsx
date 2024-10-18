import React, {useEffect} from 'react';
import Checkbox, {CheckBoxHandlerProps} from "@/app/_components/checkbox/checkbox";
import {primitive} from "@/app/_types/primitive";
import {className} from "postcss-selector-parser";


// 체크박스 그룹 옵션
export interface GroupCheckBoxOption{
    label:string | number;
    value:string | number;
    // checked:boolean;
}

interface GroupCheckBoxProps {
    direction?:"row"|"col";
    options:GroupCheckBoxOption[];
    onChange:(value:primitive[])=>void;
    label?:string;
    className?:string;

}


// 체크박스 그룹 컴포넌트
function GroupCheckBox({
                           direction="col",
                            options,
                            onChange,
                            label

                       }:GroupCheckBoxProps) {


    // 체크박스 그룹 상태
    const [checkedList,setCheckedList] = React.useState<primitive[]>([])

    // 체크박스 그룹 핸들러
    function groupCheckHandler(value:CheckBoxHandlerProps){

        if(value.checked) {
            setCheckedList(prev => Array.from(new Set([...prev, value.value])))
        }
        else{
            setCheckedList(prev => prev.filter(v=>v!==value.value))
        }
    }

    useEffect(() => {
        onChange(checkedList)
    }, [checkedList]);

    return (
        <div
            className={`flex ${direction==="col"?"flex-col":"flex-row"}
            w-full
            ${className}
            `}>
            {label&&<span className={"text-title3Normal"}>{label}</span>}
            {
                options.map((v,i)=>
                    <Checkbox
                        key={i}
                        checked={checkedList.includes(v.value)}
                        label={v.label}
                        value={v.value}
                        onChange={groupCheckHandler}
                    />
                )
            }
        </div>
    );
}

export default GroupCheckBox;
