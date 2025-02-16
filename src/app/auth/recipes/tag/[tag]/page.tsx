import React, {FC} from 'react';
import {getAllRecipesByTag} from "@/services/recipes.service";
import {SearchParams} from "next/dist/server/request/search-params";
import PaginationComp from "@/components/pagination/PaginationComp";
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
    console.log(Math.floor(recipes.length / 5 + 1));
    console.log(recipes);
    return (
        <div>
            <RecipesByTagComponent page={Number(sp.page)} tag={tag}/>
            <PaginationComp pg={Number(sp.page)} pathname={`auth/recipes/tag/${tag}`} lastPage={lastPage}/>
        </div>
    );
};

export default RecipesByTagPage;