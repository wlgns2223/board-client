"use server";

import { TFormResult } from "../../core/types/common";
import { signUpDto, TSignUpDto } from "./dto";

export const signUp = (prev: any, formData: FormData): TFormResult<TSignUpDto> => {
    const result = signUpDto.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
        nickname: formData.get("nickname"),
    });

    if (!result.success) {
        return {
            ok: false,
            data: null,
            message: "validation fail",
        };
    }

    /**
     * some backend logics... if this app has its own backend
     */

    return {
        data: result.data,
        message: "",
        ok: true,
    };
};
