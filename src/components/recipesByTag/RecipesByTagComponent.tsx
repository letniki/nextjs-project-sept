import {getRecipesByTag} from "@/services/recipes.service";
import {RecipeComponent} from "@/components/recipe/RecipeComponent";
import './RecipesByTagComponent.css'

type RecipesByTagComponentType = {
    page: number;
    tag: string
}
const RecipesByTagComponent = async({page, tag}:RecipesByTagComponentType) => {
    const pg = (page? page : 1);
    const recipes = await getRecipesByTag(tag, pg);
    return (
        <div className='recipesBox'>
            {recipes.map(recipe=><RecipeComponent key={recipe.id} recipe={recipe}/>)}
        </div>
    );
};

export default RecipesByTagComponent;