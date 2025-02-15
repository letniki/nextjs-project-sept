import {FC} from "react";
import {SearchParams} from "next/dist/server/request/search-params";

import PaginationComp from "@/components/pagination/PaginationComp";
import RecipesComponent from "@/components/recipes/RecipesComponent";

type Props = {
    searchParams: Promise<SearchParams>
}

const RecipesPage: FC<Props> = async ({searchParams}) => {
    const sp = await searchParams;
    console.log(sp.page)
    return (
        <div>
            <RecipesComponent page={Number(sp.page)}/>
            <PaginationComp pg={Number(sp.page)} pathname={'auth/recipes'} lastPage={5}/>
        </div>
    );
};

export default RecipesPage;