import Link from "next/link";
import {getCookie} from "cookies-next";
import {cookies} from "next/headers";

export const Menu = async () => {

    const user = await getCookie('user', {cookies});

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
                (user) ? (<ul className='block'>
                    <li><Link className='Link' href={'/auth/users'}>users</Link></li>
                    <li><Link className='Link' href={'/auth/recipes'}>recipes</Link></li>

                    {/*{user ? (<img className='img' src={user.image} alt={JSON.parse(user).username}/>) : (<li><Link href={'/login'}>login</Link></li>)}*/}
                </ul>) : (<ul className='block'>
                    <li className='Link'><Link className='Link' href={'/login'}>login</Link></li>
                </ul>)
            }
        </>
    );
};

