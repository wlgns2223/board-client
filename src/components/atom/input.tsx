"use client";

import { Input } from "@material-tailwind/react";
import { HTMLInputTypeAttribute } from "react";

export type TInput = {
    label: string;
    type?: HTMLInputTypeAttribute;
};
export default function MyInput({ label, ...rest }: TInput) {
    return <Input {...rest} label={label} crossOrigin={undefined} />;
}
