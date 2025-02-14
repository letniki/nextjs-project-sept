import React, {FC} from 'react';
import {loadAuthUser} from "@/services/users.service";
import {SearchParams} from "next/dist/server/request/search-params";
import {loadAllAuthRecipes} from "@/services/recipes.service";

type Props = {
    params: Promise<{id: string}>;
    searchParams: Promise<SearchParams>;
}

const UserPage :FC<Props> = async({params}) => {

    const {id} = await params;
    console.log(id)
    const user = await loadAuthUser(id);
    const recipes = await loadAllAuthRecipes();
    return (
        <div className='box'>
            {user && (<div>
                <h1>{user.id}. {user.firstName} {user.lastName}</h1>
                <h2>Username: {user.username}</h2>
                <h3>Email: {user.email}</h3>
                <h3>Phone: {user.phone}</h3>
                <h3>University: {user.university}</h3>
                <p>Birth date: {user.birthDate}</p>
                <p>Age: {user.age} years</p>
                <p>Blood group: {user.bloodGroup}</p>
                <p>Eye color: {user.eyeColor}</p>
                <p> Hair color: {user.hair.color} - Hair type: {user.hair.type} </p>
                <p>Height: {user.height} Weight: {user.weight}</p></div>)
            }
            <div className='recipeComp'>
                {id && recipes.map(recipe => (recipe.userId === +id ? (
                    <div key={recipe.id}>{recipe.userId}-{recipe.name}
                        <img src={recipe.image} alt={recipe.name}/></div>) : null))}</div>
        </div>
    );
};

export default UserPage;