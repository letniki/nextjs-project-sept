import {FC} from "react";
import {loadAuthRecipes} from "@/services/recipes.service";
import {RecipeComponent} from "@/components/recipe/RecipeComponent";

type Props = {
    page: number
}
const RecipesComponent: FC<Props> = async({page}) => {
    const pg = (page? page : 1);
    const recipes = await loadAuthRecipes(pg)
    return (
        <div>
            {recipes.map(recipe =><RecipeComponent key={recipe.id} recipe={recipe}/>)}
        </div>
    );
};

export default RecipesComponent;