import {loadAuthUsers} from "@/services/users.service";
import {FC} from "react";
import Link from "next/link";

type Props = {
    page: number
}

const UsersComponent: FC<Props> = async ({page}) => {

    const pg = (page? page.toString() : '1');
    const  users = await loadAuthUsers(pg);

    return (
        <div>
            <ul>
                {
                    users.map(user => <div className='userBox' key={user.id}>
                        <Link className='userLink' href={`users/${user.id}`}>
                            <h2>{user.id}. {user.firstName} {user.lastName}</h2>
                            <img src={user.image} alt={user.lastName}/>
                            <h3>Age:{user.age}</h3>
                        </Link>
                    </div>)
                }
            </ul>
</div>
    );
};
export default UsersComponent;