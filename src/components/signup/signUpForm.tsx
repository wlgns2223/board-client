"use client";

import { Input } from "@material-tailwind/react";
import MyButton from "../atom/my-button";
import { signUp } from "../../lib/signUp/action";
import { useFormState } from "react-dom";
import { TCreateUserDto } from "../../lib/signUp/dto";

export default function SignUpForm() {
    const [state, signUpAction] = useFormState(signUp, {
        ok: true,
        message: "",
    });

    return (
        <form className="mt-8" action={signUpAction}>
            <ul className="flex flex-col gap-y-2">
                <li>
                    <Input label="email" name="email" required crossOrigin={undefined} />
                </li>
                <li className="mt-2">
                    <Input
                        label="password"
                        name="password"
                        required
                        type="password"
                        crossOrigin={undefined}
                    />
                </li>
                <li className="mt-2">
                    <Input
                        label="repassword"
                        name="repassword"
                        required
                        type="password"
                        crossOrigin={undefined}
                    />
                </li>
                <li className="mt-2">
                    <Input label="nickname" name="nickname" required crossOrigin={undefined} />
                </li>
            </ul>
            <div className="flex mt-4">
                <MyButton color="blue" type="submit" className="w-full">
                    {"회원가입"}
                </MyButton>
            </div>
        </form>
    );
}
