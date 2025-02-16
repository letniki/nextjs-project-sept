import UsersComponent from "@/components/users/UsersComponent";
import PaginationComp from "@/components/pagination/PaginationComp";
import {FC} from "react";
import Link from "next/link";


type Props = {
    searchParams: Promise<{[key: string]: string | string[] | undefined }>
}
const UsersPage:FC<Props> = async({searchParams}) => {
    const sp = await searchParams;
    console.log(sp.page)
    return (
        <div>
            <Link href={'users/search'}>Search users</Link>
            <UsersComponent page={Number(sp.page)}/>
            <PaginationComp pg={Number(sp.page)} pathname={'auth/users'} lastPage={13}/>
        </div>
    );
};

export default UsersPage;