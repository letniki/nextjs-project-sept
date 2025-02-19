import React, {FC} from 'react';
import {loadAuthUser} from "@/services/users.service";
import {loadAllAuthRecipes} from "@/services/recipes.service";
import {RecipeComponent} from "@/components/recipe/RecipeComponent";
import UserCardComponent from "@/components/userCard/UserCardComponent";
import './UserPage.css'
type Props = {
    params: Promise<{id: string}>;
}

const UserPage :FC<Props> = async({params}) => {

    const {id} = await params;
    const user = await loadAuthUser(id);
    const recipes = await loadAllAuthRecipes();
    return (
        <div className='box'>
            {
                user && <UserCardComponent key={user.id} user={user}/>
            }
            <div className='recipeComp'>
                {id && recipes.map(recipe => (recipe.userId === +id ? (<RecipeComponent key={recipe.id} recipe={recipe} />) : null))}</div>
        </div>
    );
};

export default UserPage;