import {axiosInstance} from "@/services/api.service";
import {IRecipesResponseModelType} from "@/models/IRecipesResponseModelType";
import {IRecipe} from "@/models/IRecipe";
import {getCookie} from "cookies-next";
import {cookies} from "next/headers";
import {addHeadersGet} from "@/services/helpers";

export const loadAuthRecipes = async (page: number): Promise<IRecipe[]> =>{
    await addHeadersGet();
    if(page<0){
        const {data: {recipes}} = await axiosInstance.get<IRecipesResponseModelType>('/recipes' + '?limit=' + 10);
        return recipes;
    }
    const limit: number = 10;
    const skip: number = limit * (page) - limit;
    const {data:{recipes}} = await axiosInstance.get('/recipes' + '?limit=' + limit + '&skip=' + skip );
    return recipes;
}
export const loadAllAuthRecipes = async (): Promise<IRecipe[]> =>{
    const token = await getCookie('user', {cookies});
    const headers = {Authorization: `Bearer ${token}`};
    const {data: {recipes}} = await axiosInstance.get<IRecipesResponseModelType>('/recipes' + '?limit=' + 50, {headers});
    return recipes;
}

export const loadAuthRecipe =async (id: string):Promise<IRecipe> =>{
    await addHeadersGet();
    const {data} = await axiosInstance.get<IRecipe>(`/recipes/${id}`);
    return data;
}
export const getRecipesByTag = async (tag: string): Promise<IRecipe[]> =>{
    const {data: {recipes}} = await axiosInstance.get<IRecipesResponseModelType>('/recipes/tag/' + tag);
    return recipes;
}
export const searchRecipesByIdOrQuery = async (query: string): Promise<IRecipe[]>=>{
    if(!isNaN(Number(query))  && (Number(query) > 0) && (Number(query) <= 50)){
        const recipe = await loadAuthRecipe(query);
        return [recipe];
    } else{
        const {data: {recipes}}  = await axiosInstance.get<IRecipesResponseModelType>(`/recipe/search?q=${query}`);
        return recipes;
    }
}