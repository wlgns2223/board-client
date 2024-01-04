import { z } from "zod";

export const CreateUserDto = z.object({
    email: z.string().email(),
    nickname: z.string(),
    password: z.string().min(4),
});

export type TCreateUserDto = z.infer<typeof CreateUserDto>;
