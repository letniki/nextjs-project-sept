import axios from "axios";
import {getCookie} from "cookies-next";
import {cookies} from "next/headers";
import {refresh} from "@/services/auth.service";

// const cookieStore = await cookies();
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

axiosInstance.interceptors.response.use(
    response => response,  // успешный ответ
    async error => {
        const originalRequest = error.config;

        // Если ошибка 401 (неавторизованный) и запрос не был повторен
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                // Попытка обновить токен
                await refresh();  // вызываем функцию рефреша
                const newAccessToken =await getCookie('user', {cookies});  // или используйте ваш метод для получения токена из cookies

                // После получения нового токена, повторяем запрос с новым токеном
                originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                return axiosInstance(originalRequest); // повторный запрос
            } catch (error) {
                console.error('Failed to refresh token:', error);
                // Перенаправляем на страницу логина или выполняем другие действия
            }
        }

        return Promise.reject(error); // если ошибка не 401 или не удалось обновить токен
    }
);