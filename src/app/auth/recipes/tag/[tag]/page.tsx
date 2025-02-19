import React, {FC} from 'react';
import {getAllRecipesByTag} from "@/services/recipes.service";
import {SearchParams} from "next/dist/server/request/search-params";
import PaginationComponent from "@/components/pagination/PaginationComponent";
import RecipesByTagComponent from "@/components/recipesByTag/RecipesByTagComponent";

type Props = {
    params: Promise<{tag: string}>;
    searchParams: Promise<SearchParams>
}

const RecipesByTagPage:FC<Props> = async ({params, searchParams}) => {
    const {tag} = await params;
    const sp = await searchParams;
    const recipes = await getAllRecipesByTag(tag);
    const lastPage = Math.floor(recipes.length/5 +1);
    return (
        <div>
            <RecipesByTagComponent page={Number(sp.page)} tag={tag}/>
            <PaginationComponent pg={Number(sp.page)} pathname={`auth/recipes/tag/${tag}`} lastPage={lastPage}/>
        </div>
    );
};

export default RecipesByTagPage;