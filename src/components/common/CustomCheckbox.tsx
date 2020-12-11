import React, {useState} from "react";
import {Checkbox} from "@material-ui/core";


type CustomCheckboxPropsType = {
    
}

export const CustomCheckbox: React.FC<CustomCheckboxPropsType> = (props) => {

    const [value, setValue] = useState<boolean>(false)

    const onChange = (e: any) => {
        let value = e.currentTarget.checked
        
        setValue(value)
    }
    
    return <>
        <Checkbox checked={value} onChange={onChange}/>
    </>
}