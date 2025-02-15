import {SearchParams} from "next/dist/server/request/search-params";
import {FC} from "react";
import {loadAuthRecipe} from "@/services/recipes.service";
import Link from "next/link";

type Props = {
    params: Promise<{id: string}>;
    searchParams: Promise<SearchParams>;
}
const RecipePage:FC<Props> = async({params}) => {
    const {id} = await params;
const recipe = await loadAuthRecipe(id);
    return (
        <>
            {
                recipe &&<div className='recipeCard'>

                    <div className='recipeCardBox'>
                        <h2>{recipe.id}. {recipe.name} </h2>
                        <Link className='userCardLink' href={`/auth/users/${recipe.userId}`}><h3>UserId :{recipe.userId}</h3></Link>

                        <div>
                            <img className='image' src={recipe.image} alt={recipe.name}/>
                        </div>
                        {!(recipe.cookTimeMinutes===0) && <p>Cook time: {recipe.cookTimeMinutes} minutes</p>}
                        {!(recipe.prepTimeMinutes===0) && <p>Prepare time: {recipe.prepTimeMinutes} minutes</p>}
                        <div>Difficulty: {recipe.difficulty}</div>
                    </div>
                    <div>
                        <h3>Instructions:</h3>
                        <h3 className='recipeCardBox'>{recipe.instructions}</h3>
                        <h4>Cuisine: {recipe.cuisine}</h4>
                        <p>Calories: {recipe.caloriesPerServing}</p>
                        <p>Rating: {recipe.rating}</p>
                        <div>Meal types: {recipe.mealType.map((mealType, index) => <div key={index}>{mealType}</div>)}</div>
                        <div className='linkToRecipesByTag'> <b>Tags:</b> {
                            recipe.tags.map((tag, index) => <div key={index}>
                                <Link className='recipeLink' href={'/auth/recipes/tag/' + tag}>{tag}</Link>
                            </div>)
                        }</div>
                    </div>
                </div>
            }
        </>
    );
};

export default RecipePage;