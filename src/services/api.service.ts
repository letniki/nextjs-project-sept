'use server'
import axios from "axios";
import {cookies} from "next/headers";

export const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
});

axiosInstance.interceptors.request.use(async (requestObject)=>{
    const cookieStore = await cookies();
    if(requestObject.method?.toUpperCase() === 'GET'){
        requestObject.headers.Authorization = 'Bearer ' + cookieStore.get('user')?.value
    }
    return requestObject;
})

