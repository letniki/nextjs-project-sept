import React, {FC} from 'react';
import {loadAuthUser} from "@/services/users.service";
import {loadAllAuthRecipes} from "@/services/recipes.service";
import {RecipeComponent} from "@/components/recipe/RecipeComponent";
import UserCard from "@/components/userCard/UserCard";

type Props = {
    params: Promise<{id: string}>;
}

const UserPage :FC<Props> = async({params}) => {

    const {id} = await params;
    console.log(id)
    const user = await loadAuthUser(id);
    const recipes = await loadAllAuthRecipes();
    return (
        <div className='box'>
            {
                user && <UserCard key={user.id} user={user}/>
            }
            <div className='recipeComp'>
                {id && recipes.map(recipe => (recipe.userId === +id ? (<RecipeComponent key={recipe.id} recipe={recipe} />) : null))}</div>
        </div>
    );
};

export default UserPage;