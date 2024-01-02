"use server";

export const signInUser = (formData: FormData) => {
    const obj = Object.fromEntries(formData.entries());
    console.log(obj);
};
