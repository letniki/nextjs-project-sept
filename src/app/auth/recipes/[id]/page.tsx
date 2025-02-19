import {FC} from "react";
import {loadAuthRecipe} from "@/services/recipes.service";
import {RecipeCardComponent} from "@/components/recipeCard/RecipeCardComponent";

type Props = {
    params: Promise<{id: string}>;
}
const RecipePage:FC<Props> = async({params}) => {
    const {id} = await params;
const recipe = await loadAuthRecipe(id);
    return (
        <>
            {
                recipe && <RecipeCardComponent key={recipe.id} recipe={recipe}/>
            }
        </>
    );
};

export default RecipePage;