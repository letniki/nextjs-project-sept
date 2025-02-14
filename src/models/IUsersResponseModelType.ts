import {IUser} from "@/models/IUser";


export type IUsersResponseModelType = {
    total: number;
    skip: number;
    limit: number;
    users: IUser[];
}