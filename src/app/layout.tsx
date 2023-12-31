import type { Metadata } from "next";
import "./globals.css";
import MUIThemeProvider from "../lib/context";

export const metadata: Metadata = {
    title: "blog",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko">
            <body>
                <MUIThemeProvider>{children}</MUIThemeProvider>
            </body>
        </html>
    );
}
