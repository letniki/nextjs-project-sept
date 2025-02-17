import {FC} from "react";

import PaginationComp from "@/components/pagination/PaginationComp";
import RecipesComponent from "@/components/recipes/RecipesComponent";
import Link from "next/link";

type Props = {
    searchParams: Promise<{[key: string]: string | string[] | undefined }>
}

const RecipesPage: FC<Props> = async ({searchParams}) => {
    const sp = await searchParams;
    console.log(sp.page)
    return (
        <div>
            <Link href={'recipes/search'}>Search recipes</Link>
            <RecipesComponent page={Number(sp.page)}/>
            <PaginationComp pg={Number(sp.page)} pathname={'auth/recipes'} lastPage={5}/>
        </div>
    );
};

export default RecipesPage;