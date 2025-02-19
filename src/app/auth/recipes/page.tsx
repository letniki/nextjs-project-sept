import {FC} from "react";
import PaginationComponent from "@/components/pagination/PaginationComponent";
import RecipesComponent from "@/components/recipes/RecipesComponent";
import Link from "next/link";
import './RecipesPage.css'

type Props = {
    searchParams: Promise<{[key: string]: string | string[] | undefined }>
}

const RecipesPage: FC<Props> = async ({searchParams}) => {
    const sp = await searchParams;
    return (
        <>
            <div className='SearchRecipesDiv'>
            <Link className='SearchRecipesLink' href={'recipes/search'}>Search recipes</Link></div>
            <RecipesComponent page={Number(sp.page)}/>
            <PaginationComponent pg={Number(sp.page)} pathname={'auth/recipes'} lastPage={5}/>
        </>
    );
};

export default RecipesPage;