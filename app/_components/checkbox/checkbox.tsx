"use client";

import React from "react";


export interface CheckBoxHandlerProps{
    checked:boolean
    value:string|number
}

interface CheckboxProps{
    checked:boolean;
    label:string|number;
    value:string|number;
    onChange:(value:CheckBoxHandlerProps)=>void;
}


function Checkbox ({ checked, label,value, onChange }: CheckboxProps)  {


  return (
  <label
      className={"w-full flex cursor-pointer gap-2"}
  >
        <input
            className={"accent-orange-600 w-5 h-5"}
            type={"checkbox"}
            checked={checked}
            onChange={(e) => onChange({
              checked:e.target.checked,
              value
            })}
        />
        <p>
            {label}
        </p>
  </label>
  );
};

export default Checkbox;
