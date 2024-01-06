import type { Metadata } from "next";
import "./globals.css";
import MUIThemeProvider from "../lib/context";
import Footer from "../components/common/footer/footer";
import Providers from "../core/contexts";

export const metadata: Metadata = {
    title: "blog",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko">
            <body>
                <Providers>
                    {children}
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
