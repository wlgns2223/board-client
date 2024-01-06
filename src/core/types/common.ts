export type TFormResult<T> = {
    ok: boolean;
    data: T | null;
    message: string;
};
