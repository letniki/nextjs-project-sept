'use server'
import {axiosInstance} from "@/services/api.service";
import {IUserWithTokens} from "@/models/IUserWithTokens";
import {LoginDataType} from "@/models/LoginDataType";
import {setCookie} from "cookies-next";
import {cookies} from "next/headers";

export const login = async ({username, password, expiresInMins}:LoginDataType): Promise<IUserWithTokens> =>{
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMins});
    await setCookie('accessToken', userWithTokens.accessToken, {cookies});
    await setCookie('refreshToken', userWithTokens.refreshToken, {cookies});
    return userWithTokens;
}
