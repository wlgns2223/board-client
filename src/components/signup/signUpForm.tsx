"use client";

import { Input } from "@material-tailwind/react";
import MyButton from "../atom/my-button";
import { useSignUp } from "../../lib/signUp/useSignUp";
import { ChangeEvent, useState } from "react";
import { TSignUpDto, zSignUpDto, zSignUpInput } from "../../lib/signUp/dto";

export default function SignUpForm() {
    const { mutate: signUpMu, data } = useSignUp();
    const [signUpDto, setSignUpDto] = useState<TSignUpDto>(zSignUpInput.parse({}));
    const [repassword, setRepassword] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setSignUpDto({
            ...signUpDto,
            [name]: value,
        });
    };

    const handleRepassword = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setRepassword(value);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const result = zSignUpDto.safeParse(signUpDto);
        if (result.success) {
            console.log("call");
            signUpMu(result.data);
        } else {
            console.log("validate fail");
            console.dir(result.error);
        }
    };

    return (
        <form className="mt-8">
            <ul className="flex flex-col gap-y-2">
                <li>
                    <Input
                        onChange={handleChange}
                        label="email"
                        name="email"
                        required
                        crossOrigin={undefined}
                    />
                </li>
                <li className="mt-2">
                    <Input
                        onChange={handleChange}
                        label="password"
                        name="password"
                        required
                        type="password"
                        crossOrigin={undefined}
                    />
                </li>
                <li className="mt-2">
                    <Input
                        onChange={handleRepassword}
                        label="repassword"
                        name="repassword"
                        required
                        type="password"
                        crossOrigin={undefined}
                    />
                </li>
                <li className="mt-2">
                    <Input
                        onChange={handleChange}
                        label="nickname"
                        name="nickname"
                        required
                        crossOrigin={undefined}
                    />
                </li>
            </ul>
            <div className="flex mt-4">
                <MyButton color="blue" type="button" className="w-full" onClick={handleSubmit}>
                    {"회원가입"}
                </MyButton>
            </div>
        </form>
    );
}
