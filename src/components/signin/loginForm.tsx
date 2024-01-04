"use client";
import { Input } from "@material-tailwind/react";
import { signInUser } from "../../lib/login/actions";
import MyButton from "../atom/my-button";

export default function LoginForm() {
    return (
        <form className="mt-8" action={signInUser}>
            <div className="flex flex-col gap-y-2">
                <Input label="ID" name="userId" required crossOrigin={undefined} />
                <Input
                    label="Password"
                    name="password"
                    required
                    type="password"
                    crossOrigin={undefined}
                />
            </div>
            <div className="flex mt-4">
                <MyButton color="blue" type="submit" className="w-full">
                    {"로그인"}
                </MyButton>
            </div>
        </form>
    );
}
