'use server'
import {axiosInstance} from "@/services/api.service";
import {getCookie} from "cookies-next";
import {cookies} from "next/headers";

let interceptorAdded = false;
export const addHeadersGet = async () => {
    if (interceptorAdded) return;
    console.log(interceptorAdded);
    const token = await getCookie('user', {cookies});
    if (token){
        axiosInstance.interceptors.request.use((requestObject)=>{
            if(requestObject.method?.toUpperCase() === 'GET'){
                console.log('hello');
                interceptorAdded = true;
                requestObject.headers.Authorization = 'Bearer ' + token
            }
            return requestObject;
        })

    }
}