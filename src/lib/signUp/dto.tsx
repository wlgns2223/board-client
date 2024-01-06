import { z } from "zod";

export const zUser = z.object({
    id: z.string().default(""),
    email: z.string().default(""),
    nickname: z.string().default(""),
    password: z.string().default(""),
    createdAt: z.date().default(new Date()),
    updatedAt: z.date().default(new Date()),
});
export type TUser = z.infer<typeof zUser>;

export const zSignUpDto = z.object({
    email: z.string().email(),
    nickname: z.string().refine((value) => /^[a-zA-Z0-9]*$/i.test(value), {
        message: "nickname can contain only English and Number",
    }),
    password: z.string().min(4),
});
export type TSignUpDto = z.infer<typeof zSignUpDto>;

export const zSignUpInput = z.object({
    email: z.string().default(""),
    nickname: z.string().default(""),
    password: z.string().default(""),
});
export type TSignUpInput = z.infer<typeof zSignUpInput>;

export const SignUpResponseData = zUser.omit({
    password: true,
});

export type TSignUpResponseData = z.infer<typeof SignUpResponseData>;
