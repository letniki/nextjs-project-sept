import {IUsersResponseModelType} from "@/models/IUsersResponseModelType";
import {IUser} from "@/models/IUser";
import {axiosInstance} from "@/services/api.service";

export const loadAuthUsers = async (page: string): Promise<IUser[]> =>{
    if(+page<0){
        const {data:{users}} = await axiosInstance.get<IUsersResponseModelType>('/users');
        return users;
    }
    const limit: number = 16;
    const skip: number = limit * (+page) - limit;
    const {data:{users}} = await axiosInstance.get('/users'+ '?limit=' + limit + '&skip=' + skip);
    return users;
}

export const loadAuthUser =async (id: string):Promise<IUser> =>{
    const {data} = await axiosInstance.get<IUser>(`/users/${id}`);
    return data;
}

export const searchUsersByIdOrName = async (query: string): Promise<IUser[]>=>{
    if(!isNaN(Number(query))  && (Number(query) > 0) && (Number(query) <= 208)){
        const {data: user} = await axiosInstance.get<IUser>(`/users/${query}`);
        return [user];
    } else {
        const limit: number=208;
        const {data: {users}}  = await axiosInstance.get<IUsersResponseModelType>(`/users/search?q=${query}`+ '&limit=' + limit);
        return users;
    }
}

export const getLoginedUser = async (): Promise<IUser> =>{
    const {data} = await axiosInstance.get<IUser>('/me');
    return data
}