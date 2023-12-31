import Logo from "@/assets/logo.svg";
import Icon from "../../util/icon";
import LoginButton from "./login-button";
import Image from "next/image";

export default function Header() {
    return (
        <header className=" p-4 bg-blue-50 ">
            <nav className="max-w-screen-xl mx-auto w-full h-full flex justify-between items-center ">
                <Icon className="w-12 h-12 ">
                    <Logo />
                </Icon>
                <LoginButton />
            </nav>
            <section className="flex flex-col justify-center items-center mt-8 overflow-hidden">
                <h1 className="sr-only">{"메인 페이지"}</h1>
                <div className="text-4xl font-bold ">
                    <p>
                        <span className="bg-gradient-to-r text-transparent bg-clip-text from-[#6D6AFE] to-[#FF9F9F]">
                            {"나만의 블로그"}
                        </span>
                        {"를"}
                        <br />
                        {"만들어 보세요"}
                    </p>
                </div>
                <div className="w-[900px] aspect-video relative -bottom-[90px] overflow-hidden rounded-lg">
                    <Image
                        fill
                        alt="hero 이미지"
                        src="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                </div>
            </section>
        </header>
    );
}
