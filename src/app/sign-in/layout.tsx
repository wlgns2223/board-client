import { PropsWithChildren } from "react";
import Nav from "../../components/common/header/nav";
import LoginButton from "../../components/common/header/login-button";
import MyInput from "../../components/atom/input";

export default function SignInLayout({ children }: PropsWithChildren) {
    return (
        <>
            <header className=" p-4 bg-blue-50 ">
                <Nav />
            </header>
            <main className="max-w-screen-xl mx-auto min-h-screen p-4 ">{children}</main>;
        </>
    );
}
