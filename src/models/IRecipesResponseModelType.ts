import {IRecipe} from "@/models/IRecipe";

export type IRecipesResponseModelType = {
    total: number;
    skip: number;
    limit: number;
    recipes: IRecipe[];
}