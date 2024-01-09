"use client";
import axios from "axios";

const endPoint = `${process.env.NEXT_PUBLIC_SERVER_URL}:${process.env.NEXT_PUBLIC_PORT}`;

export const axiosInstance = axios.create({
    baseURL: endPoint,
});
