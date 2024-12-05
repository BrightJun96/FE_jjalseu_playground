import Checkbox, {CheckBoxHandlerProps} from "@/app/_components/checkbox/checkbox";
import {primitive} from "@/app/_types/primitive";
import {className} from "postcss-selector-parser";
import React, {useEffect} from 'react';


// 체크박스 그룹 옵션
export interface GroupCheckBoxOption{
    label:string | number;
    value:string | number;
    // checked:boolean;
}

interface GroupCheckBoxProps {
    direction?:"row"|"col"; // 방향
    options:GroupCheckBoxOption[]; // 체크박스 그룹 옵션
    onChange:(value:primitive[])=>void;// 체크박스 그룹 변경 핸들러
    label?:string; //  라벨
    className?:string;
    isMultiSelect?:boolean; // 다중 선택 가능 여부

}


// 체크박스 그룹 컴포넌트
function GroupCheckBox({
                           direction="col",
                            options,
                            onChange,
                            label,
                           isMultiSelect=true // 기본 다중 선택 가능

                       }:GroupCheckBoxProps) {


    // 체크박스 그룹 상태
    const [checkedList,setCheckedList] = React.useState<primitive[]>([])

    // 체크박스 그룹 핸들러
    function groupCheckHandler(value:CheckBoxHandlerProps){


        // 다중 선택이 아닌 경우, 체크된 항목이 하나만 선택되도록
        if(!isMultiSelect){
            setCheckedList([value.value])
            return
        }

        // 다중 선택인 경우
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
                    <div
                        className={`flex items-center gap-1`}
                        key={i}
                    >
                        <span>{i+1}.</span>
                    <Checkbox
                        checked={checkedList.includes(v.value)}
                        label={v.label}
                        value={v.value}
                        onChange={groupCheckHandler}
                    />
                    </div>
                )
            }
        </div>
    );
}

export default GroupCheckBox;
