import SignUpForm from "../../../components/signup/signUpForm";

export default function Page() {
    return (
        <section className="flex flex-col p-8 max-w-[400px] mx-auto pt-28">
            <h1 className="font-bold text-3xl text-center">{"회원가입"}</h1>
            <SignUpForm />
        </section>
    );
}
