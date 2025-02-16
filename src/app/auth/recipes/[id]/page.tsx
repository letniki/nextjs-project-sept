import {FC} from "react";
import {loadAuthRecipe} from "@/services/recipes.service";
import {RecipeCard} from "@/components/recipeCard/RecipeCard";

type Props = {
    params: Promise<{id: string}>;
}
const RecipePage:FC<Props> = async({params}) => {
    const {id} = await params;
const recipe = await loadAuthRecipe(id);
    return (
        <>
            {
                recipe && <RecipeCard key={recipe.id} recipe={recipe}/>
            }
        </>
    );
};

export default RecipePage;