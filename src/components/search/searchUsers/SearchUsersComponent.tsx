'use client'
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {IUser} from "@/models/IUser";
import UserComponent from "@/components/user/UserComponent";
import {searchUsers} from "@/server-actions/serverActions";
import '@/components/search/Search.css'

export const SearchUsersComponent = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchedUsers, setSearchedUsers] = useState<IUser[]>([]);
    const [displayedUsers, setDisplayedUsers] = useState<IUser[]>([]);
    const [totalPages, setTotalPages] = useState<number>(1);
    const {register, handleSubmit, watch} = useForm<{query:string}>();
    const query = watch('query');
    const handler = async ({query}:{query : string})=> {
        const trimmedQuery = query.trim();
        if(trimmedQuery.length > 1 || !isNaN(Number(trimmedQuery))){
            const users = await searchUsers(trimmedQuery);
            setSearchedUsers(users);
            setCurrentPage(1);
            setTotalPages(Math.ceil(users.length/5));
        }
    }

    useEffect(() => {
        const startIndex = (currentPage - 1) * 5;
        const endIndex = startIndex + 5;
        if(searchedUsers){
            setDisplayedUsers(searchedUsers.slice(startIndex, endIndex));
        }
    }, [currentPage, searchedUsers, totalPages]);

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
                            disabled={!query?.trim() || Number(query?.trim()) > 208}>Search Users
                    </button>
                </form>
            </div>
            {
                (searchedUsers) && <><div className='usersBox'>
                    {
                        displayedUsers.map(user => <UserComponent key={user.id} user={user}/>)
                    }
                </div>
                    {
                        searchedUsers.length > 1 && <div className='pagination'>
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

