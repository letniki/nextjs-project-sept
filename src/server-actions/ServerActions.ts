'use server'
import {searchUsersByIdOrName} from "@/services/users.service";
import {IUser} from "@/models/IUser";

export const searchUsers = async(formData: string): Promise<IUser[]> =>{
    const users = await searchUsersByIdOrName(formData);
    return users
}