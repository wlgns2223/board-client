import Link from "next/link";
import MyInput from "../../components/atom/input";
import MyButton from "../../components/atom/my-button";
import { PATH } from "../../core/path";
import LoginForm from "../../components/login/loginForm";

export default function SignInPage() {
    return (
        <section className="flex flex-col p-8 max-w-[400px] mx-auto pt-28">
            <h1 className="font-bold text-3xl text-center">{"로그인"}</h1>
            <LoginForm />
            <div className="flex justify-center items-center mt-8">
                <Link className="text-sm underline hover:text-blue-400" href={PATH.signUp}>
                    {"처음이신가요?"}
                </Link>
            </div>
        </section>
    );
}
