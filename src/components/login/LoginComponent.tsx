'use client'
import {useForm} from "react-hook-form";
import {LoginDataType} from "@/models/LoginDataType";
import {login} from "@/services/auth.service";
import {useRouter} from "next/navigation";

export const LoginComponent = () => {
const router = useRouter();
const {register, handleSubmit} = useForm<LoginDataType>();
const handler = async({username, password}:LoginDataType)=> {
    await login({ username, password, expiresInMins: 30 });
    router.push('/auth/users');
    }
    return (
        <div className='div'>
            <h2 className='text'>Login Form</h2>
            <form className='loginForm' onSubmit={handleSubmit(handler)}>
                <div className='text'>
                    <input className='input' type="text" placeholder='username' {...register('username', {required: "Field cannot be empty"})}/>
                </div>
                <div className='text'>
                    <input className='input' placeholder='password' type="text" {...register('password', {required: "Field cannot be empty"})}/>
                </div>
                <button className='button' type='submit'>login</button>
            </form>
        </div>
    );
};