'use client'
import {useSearchParams} from "react-router";

type PaginationComponentType ={
    lastPage: number;
}

export const PaginationComponent = ({lastPage}: PaginationComponentType) => {
    const [searchParams, setSearchParams] = useSearchParams({page:'1'});
    let currentPage = Number(searchParams.get('page') || '1');
    return (
        <div className='pagination'>
            <button className='button' disabled={currentPage <= 1} onClick={() => {
                if (currentPage > 1) {
                    setSearchParams({page: (--currentPage).toString()})
                }
            }}>PREV
            </button>
            <h3 className={'h3'}>You are on {currentPage} page</h3>
            <button className='button' disabled={currentPage >= lastPage} onClick={() => {
                setSearchParams({page: (++currentPage).toString()})
            }}>NEXT
            </button>
        </div>
    );
};