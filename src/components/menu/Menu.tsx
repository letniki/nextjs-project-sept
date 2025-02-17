import Link from "next/link";
import {getCookie} from "cookies-next";
import {cookies} from "next/headers";
import {getLoginedUser} from "@/services/users.service";
import {IUser} from "@/models/IUser";

export const Menu = async () => {

    const token = await getCookie('user', {cookies});
    let user: IUser | undefined=undefined;
    if(token){
        user = await getLoginedUser();
    }

    // useEffect(() => {
    //     console.log('hello')
    //     if (!user) {
    //         setIsAuthenticated(false);
    //     } else {
    //         setIsAuthenticated(true);
    //     }
    // }, [user, window.location.pathname]);
    return (
        <>
            {
                (token) ? (<ul className='block'>
                    <li><Link className='Link' href={'/auth/users'}>users</Link></li>
                    <li><Link className='Link' href={'/auth/recipes'}>recipes</Link></li>

                    {user ? (<img className='img' src={user.image} alt={user.username}/>) : (<li><Link href={'/login'}>login</Link></li>)}
                </ul>) : (<ul className='block'>
                    <li className='Link'><Link className='Link' href={'/login'}>login</Link></li>
                </ul>)
            }
        </>
    );
};

