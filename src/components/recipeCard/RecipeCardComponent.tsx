import Link from "next/link";
import {IRecipe} from "@/models/IRecipe";
import './RecipeCardComponent.css'
type IRecipeCardProps = {
    recipe: IRecipe
}
export const RecipeCardComponent = ({recipe}: IRecipeCardProps) => {
    return (
        <div className='recipeCard'>

            <div className='recipeCardBox'>
                <h2>{recipe.id}. {recipe.name} </h2>
                <Link className='userCardLink' href={`/auth/users/${recipe.userId}`}><h3>UserId :{recipe.userId}</h3>
                </Link>

                <div>
                    <img className='image' src={recipe.image} alt={recipe.name}/>
                </div>
                {(recipe.cookTimeMinutes !== 0) && <p>Cook time: {recipe.cookTimeMinutes} minutes</p>}
                {(recipe.prepTimeMinutes !== 0) && <p>Prepare time: {recipe.prepTimeMinutes} minutes</p>}
                <div>Difficulty: {recipe.difficulty}</div>
            </div>
            <div>
                <h3>Instructions:</h3>
                <h3 className='recipeCardBox'>{recipe.instructions}</h3>
                <h4>Cuisine: {recipe.cuisine}</h4>
                <p>Calories: {recipe.caloriesPerServing}</p>
                <p>Rating: {recipe.rating}</p>
                <div>Meal types: {recipe.mealType.map((mealType, index) => <div key={index}>{mealType}</div>)}</div>
                <div className='linkToRecipesByTag'><b>Tags:</b> {
                    recipe.tags.map((tag, index) => <div key={index}>
                        <Link className='recipeLink' href={'/auth/recipes/tag/' + tag}>{tag}</Link>
                    </div>)
                }</div>
            </div>
        </div>
    );
};

