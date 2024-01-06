"use client";

import { PropsWithChildren } from "react";
import MUIThemeProvider from "../../lib/context";
import { QueryProvider } from "./queryProviders";

export default function Providers({ children }: PropsWithChildren) {
    return (
        <QueryProvider>
            <MUIThemeProvider>{children}</MUIThemeProvider>
        </QueryProvider>
    );
}
