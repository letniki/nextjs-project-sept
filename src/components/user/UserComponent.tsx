import Link from "next/link";
import {IUser} from "@/models/IUser";
import '@/components/user/UserComponent.css'
interface IUserProps {
    user:IUser
}
const UserComponent = ({user}:IUserProps) => {
    return (
        <div className='userBox' key={user.id}>
            <Link className='userLink' href={`/auth/users/${user.id}`}>
                <h2>{user.id}. {user.firstName} {user.lastName}</h2>
                <img src={user.image} alt={user.lastName}/>
                <h3>Age:{user.age}</h3>
            </Link>
        </div>
    );
};

export default UserComponent;