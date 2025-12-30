import { ReactNode } from "react";
import {GestureResponderEvent} from "react-native"
export type InputProps={
    label:string;
    password?:boolean;
    isPhone?:boolean;
}

export type MainBtnProps={
    btnText:string,
    onPress?: (event: GestureResponderEvent) => void;
}

export type CarouselProps={
    qoute:string;
    author:string
}