import { useMutation } from "@tanstack/react-query";
import { API } from "../../core/network/endPoints";
import { axiosInstance } from "../../core/network/network";
import { TSignUpDto, TSignUpResponseData } from "./dto";

const signUp = async (dto: TSignUpDto) => {
    return await axiosInstance.post(API.users.base, dto);
};

export const useSignUp = () => {
    const mutationHook = useMutation({
        mutationFn: async (dto: TSignUpDto) => {
            const res = await axiosInstance.post(API.users.base, dto);
            console.log(res);

            return res;
        },
    });
    return mutationHook;
};
