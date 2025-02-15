import {IUsersResponseModelType} from "@/models/IUsersResponseModelType";
import {IUser} from "@/models/IUser";
import {axiosInstance} from "@/services/api.service";
import {addHeadersGet} from "@/services/helpers";

export const loadAuthUsers = async (page: string): Promise<IUser[]> =>{
    await addHeadersGet();
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
    await addHeadersGet();
    const {data} = await axiosInstance.get<IUser>(`/users/${id}`);
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