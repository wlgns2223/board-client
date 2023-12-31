"use client";
import { ThemeProvider } from "@material-tailwind/react";
import { ReactNode } from "react";

export default function MUIThemeProvider({ children }: { children: ReactNode }) {
    return <ThemeProvider>{children}</ThemeProvider>;
}
