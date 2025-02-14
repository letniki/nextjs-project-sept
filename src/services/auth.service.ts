import {axiosInstance} from "@/services/api.service";
import {IUserWithTokens} from "@/models/IUserWithTokens";
import {ITokenPair} from "@/models/ITokenPair";
import {LoginDataType} from "@/models/LoginDataType";
import {retriveLocalStorage} from "@/services/helpers";
import {setCookie} from "cookies-next/client";

export const login = async ({username, password, expiresInMins}:LoginDataType): Promise<IUserWithTokens> =>{
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMins});
    setCookie('user', userWithTokens.accessToken);
    return userWithTokens;
}
export const refresh = async (refresh: string): Promise<ITokenPair>=>{
    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh',{
        refreshToken: refresh,
        expiresInMins: 30
    });
    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(iUserWithTokens));
    return iUserWithTokens;
}