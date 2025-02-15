import axios from "axios";

// const cookieStore = await cookies();
export const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
});

// axiosInstance.interceptors.request.use((requestObject)=>{
//     if(requestObject.method?.toUpperCase() === 'GET'){
//         requestObject.headers.Authorization = 'Bearer ' + getCookie('user', {cookies})
//     }
//     return requestObject;
// })