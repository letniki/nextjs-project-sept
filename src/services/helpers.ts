import {refresh} from "@/services/auth.service";

// let interceptorAdded = false;
// export const addHeadersGet = async () => {
//     if (interceptorAdded) return;
//     console.log(interceptorAdded);


    // const token = await getCookie('user', {cookies});
    // console.log(token)
    // if (token){
    //     axiosInstance.interceptors.request.use((requestObject)=>{
    //         if(requestObject.method?.toUpperCase() === 'GET'){
    //             console.log('hello');
    //             interceptorAdded = true;
    //             requestObject.headers.Authorization = 'Bearer ' + token
    //         }
    //         return requestObject;
    //     })
    //
    // }


export const RefreshTokenInterval = () => {
    const interval =  setInterval(async () => {
        try {
            await refresh();
            console.log("Token refreshed");
        } catch (error) {
            console.error("Failed to refresh token:", error);
        }
    }, 3000);
    return () => clearInterval(interval);
};

    // const cookieStore = await cookies();
    // const token = cookieStore.get('user')?.value;
    // if(token){
    //     axiosInstance.interceptors.request.use((requestObject)=>{
    //         console.log(token);
    //         if(requestObject.method?.toUpperCase() === 'GET'){
    //             requestObject.headers.Authorization = 'Bearer ' + token
    //             interceptorAdded = true;
    //             console.log('he');
    //         }
    //         return requestObject;
    //
    //
    //
    //
    //
    //
    //     })
    // }
// }
