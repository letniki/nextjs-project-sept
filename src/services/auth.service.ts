'use server'
import {axiosInstance} from "@/services/api.service";
import {IUserWithTokens} from "@/models/IUserWithTokens";
import {LoginDataType} from "@/models/LoginDataType";
import {setCookie} from "cookies-next";
import {ITokenPair} from "@/models/ITokenPair";
import {cookies} from "next/headers";

export const login = async ({username, password, expiresInMins}:LoginDataType): Promise<IUserWithTokens> =>{
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMins});
    await setCookie('user', userWithTokens.accessToken);
    await setCookie('refreshToken', userWithTokens.refreshToken);
    return userWithTokens;
}
export const refresh = async (): Promise<void>=>{
//     // const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');
    const cookieStore = await cookies();
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh',{
        refreshToken: cookieStore.get('refreshToken')?.value,
        expiresInMins: 30
    });
//     // iUserWithTokens.accessToken = accessToken;
//     // iUserWithTokens.refreshToken = refreshToken;
    await setCookie('user', accessToken);
    await setCookie('refreshToken', refreshToken);
//     // localStorage.setItem('user', JSON.stringify(iUserWithTokens));
//     // return iUserWithTokens;
}