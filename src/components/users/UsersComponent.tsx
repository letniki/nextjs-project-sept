import {loadAuthUsers} from "@/services/users.service";
import {FC} from "react";
import UserComponent from "@/components/user/UserComponent";

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
                    users.map(user => <UserComponent key={user.id} user={user}/>)
                }
            </ul>
</div>
    );
};
export default UsersComponent;