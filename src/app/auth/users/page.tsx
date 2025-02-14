import UsersComponent from "@/components/users/UsersComponent";
import PaginationComp from "@/components/pagination/PaginationComp";
import {FC} from "react";
import {SearchParams} from "next/dist/server/request/search-params";


type Props = {
    searchParams: Promise<SearchParams>
}
const UsersPage:FC<Props> = async({searchParams}) => {
    const sp = await searchParams;
    console.log(sp.page)
    return (
        <div>
            <UsersComponent page={Number(sp.page)}/>
            <PaginationComp pg={Number(sp.page)} pathname={'auth/users'}/>
        </div>
    );
};

export default UsersPage;