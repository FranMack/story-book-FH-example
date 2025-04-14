import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";

const meta={
    title:"myComponents/MyLabel",
    component:MyLabel,
    tags:["autodocs"],
    parameters:{
        layout:"centered"
    },
    argTypes:{size:{control:"select"},color:{control:"select"},fontColor:{control:"color"}}

}satisfies Meta<typeof MyLabel>


export default meta;
type Story=StoryObj<typeof meta>

export const Basic:Story={
    args:{
        label:'Basic label'
    }

}

export const AllCaps:Story={
    args:{
        label:'All caps label',
        allCaps:true
    }

}

export const Secondary:Story={
    args:{
        label:'Secondary label',
        fontColor:"red"
    }

}
