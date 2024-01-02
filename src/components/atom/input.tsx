"use client";

import { Input, InputProps } from "@material-tailwind/react";
import { HTMLInputTypeAttribute } from "react";

export type TInput = {
    label: string;
    type?: HTMLInputTypeAttribute;
};
export default function MyInput({ ...rest }: TInput) {
    return <Input {...rest} crossOrigin={undefined} />;
}
