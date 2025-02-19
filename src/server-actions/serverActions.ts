'use server'
import {searchUsersByIdOrName} from "@/services/users.service";
import {IUser} from "@/models/IUser";
import {IRecipe} from "@/models/IRecipe";
import {searchRecipesByIdOrQuery} from "@/services/recipes.service";

export const searchUsers = async(formData: string): Promise<IUser[]> =>{
    return await searchUsersByIdOrName(formData);
}
export const searchRecipes = async(formData: string): Promise<IRecipe[]> =>{
    return await searchRecipesByIdOrQuery(formData);
}