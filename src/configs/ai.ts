import axios from "axios";

const envApi = import.meta.env.VITE_API;

export const API = axios.create({
    baseURL: envApi,
    withCredentials: true,
});