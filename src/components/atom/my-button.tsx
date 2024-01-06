"use client";

import { Button } from "@material-tailwind/react";
import { color, size } from "@material-tailwind/react/types/components/button";
import { MouseEventHandler, PropsWithChildren } from "react";

export type TButton = {
    type?: "button" | "submit" | "reset" | undefined;
    size?: size;
    color?: color;
    className?: string;
    onClick: MouseEventHandler<HTMLButtonElement> | undefined;
};

export default function MyButton({ children, ...rest }: PropsWithChildren<TButton>) {
    return <Button {...rest}>{children}</Button>;
}
