'use server'
import {IUsersResponseModelType} from "@/models/IUsersResponseModelType";
import {IUser} from "@/models/IUser";
import {axiosInstance} from "@/services/api.service";
import {getCookie} from "cookies-next";
import {cookies} from "next/headers";

export const loadAuthUsers = async (page: string): Promise<IUser[]> =>{
    const token = await getCookie('user', {cookies});
    const headers = {Authorization: `Bearer ${token}`};
    // console.log(headers);
    if(+page<0){
        const {data:{users}} = await axiosInstance.get<IUsersResponseModelType>('/users', {headers});
        console.log(getCookie('user'));
        return users;
    }
    const limit: number = 16;
    const skip: number = limit * (+page) - limit;
    // console.log(JSON.parse(getCookie('user').accessToken));
    const {data:{users}} = await axiosInstance.get('/users'+ '?limit=' + limit + '&skip=' + skip,{headers});
    return users;
}

export const loadAuthUser =async (id: string):Promise<IUser> =>{
    const token = await getCookie('user', {cookies});
    const headers = {Authorization: `Bearer ${token}`};
    const {data} = await axiosInstance.get<IUser>(`/users/${id}`, {headers});
    return data;
}

export const searchUsersByIdOrName = async (query: string): Promise<IUser[]>=>{
    if(!isNaN(Number(query))  && (Number(query) > 0) && (Number(query) <= 208)){
        const user = await loadAuthUser(query);
        return [user];
    } else {
        const {data: {users}}  = await axiosInstance.get<IUsersResponseModelType>(`/users/search?q=${query}`);
        return users;
    }
}