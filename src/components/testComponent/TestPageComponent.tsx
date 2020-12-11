import React from "react";
import { CustomButton } from "../common/CustomButton";
import { CustomCheckbox } from "../common/CustomCheckbox";
import { MyInput } from "../common/MyInput";


type TestPageComponentType = {

}

export const TestPageComponent:React.FC<TestPageComponentType> = (props) => {
    return <div>
        <MyInput />
        <CustomCheckbox />
        <CustomButton />
    </div>
}