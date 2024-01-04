"use server";

import { CreateUserDto, TCreateUserDto } from "./dto";

export const signUp = (prev: any, formData: FormData) => {
    const data = Object.fromEntries(formData.entries());

    console.log({ prev });

    const result = CreateUserDto.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
        nickname: formData.get("nickname"),
    });

    if (true) {
        return {
            ok: false,
            message: "validation fail",
        };
    }

    return {
        ...data,
    };
};
