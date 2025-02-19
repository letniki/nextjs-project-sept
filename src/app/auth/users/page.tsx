import UsersComponent from "@/components/users/UsersComponent";
import {FC} from "react";
import Link from "next/link";
import './UsersPage.css'
import PaginationComponent from "@/components/pagination/PaginationComponent";

type Props = {
    searchParams: Promise<{[key: string]: string | string[] | undefined }>
}
const UsersPage:FC<Props> = async({searchParams}) => {
    const sp = await searchParams;
    return (
        <>
            <div className='SearchUsersDiv'>
            <Link className='SearchUsersLink' href={'users/search'}>Search users</Link>
            </div>
            <UsersComponent page={Number(sp.page)}/>
            <PaginationComponent pg={Number(sp.page)} pathname={'auth/users'} lastPage={13}/>
        </>
    );
};

export default UsersPage;