'use client'
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {searchRecipes} from "@/server-actions/serverActions";
import {RecipeComponent} from "@/components/recipe/RecipeComponent";
import {IRecipe} from "@/models/IRecipe";
import '@/components/search/Search.css'

export const SearchRecipesComponent = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchedRecipes, setSearchedRecipes] = useState<IRecipe[]>([]);
    const [displayedRecipes, setDisplayedRecipes] = useState<IRecipe[]>([]);
    const [totalPages, setTotalPages] = useState<number>(1);
    const {register, handleSubmit, watch} = useForm<{query:string}>();
    const query = watch('query');
    const handler = async ({query}:{query : string})=> {
        const trimmedQuery = query.trim();
        if(trimmedQuery.length > 1 || !isNaN(Number(trimmedQuery))){
            const recipes = await searchRecipes(trimmedQuery);
            setSearchedRecipes(recipes);
            setCurrentPage(1);
            setTotalPages(Math.ceil(recipes.length/5));
        }
    }

    useEffect(() => {
        const startIndex = (currentPage - 1) * 5;
        const endIndex = startIndex + 5;
        if(searchedRecipes){
            setDisplayedRecipes(searchedRecipes.slice(startIndex, endIndex));
        }
    }, [currentPage, searchedRecipes, totalPages]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };
    return (
        <>
            <div className='box'>
                <form className='form' onSubmit={handleSubmit(handler)}>
                    <input className='inp'
                           type="text" {...register('query', {required: "Field cannot be empty"})}></input>
                    <button className='button' type='submit'
                            disabled={!query?.trim() || Number(query?.trim()) > 50}>Search Recipes
                    </button>
                </form>
            </div>
            {
                (searchedRecipes) && <><div className='recipesBox'>
                    {
                        displayedRecipes.map(recipe => <RecipeComponent key={recipe.id} recipe={recipe}/>)
                    }
                </div>
                    {
                        searchedRecipes.length > 1 && <div className='pagination'>
                            <button className='button' onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
                            <h3 className='h3'>You are on {currentPage} page</h3>
                            <button className='button' onClick={handleNextPage} disabled={currentPage >= totalPages}>Next</button>
                        </div>
                    }
                </>
            }
        </>
    );
};

