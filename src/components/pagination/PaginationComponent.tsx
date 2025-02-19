import Link from 'next/link';
import React, {FC} from 'react';
import "@/components/pagination/PaginationComponent.css";

interface Props {
    pg: number,
    pathname: string,
    lastPage: number
}

const PaginationComponent: FC<Props> = ({pg, pathname, lastPage}) => {

    const page = (pg? pg : 1);
    return (
        <div className='pagination'>
                <button className='button' disabled={page === 1}>
                    <Link className='Link' href={`/${pathname}?page=${page > 1 ? page - 1 : 1}`}>PREV</Link>
                </button>
                <h3 className='h3'>You are on {page} page</h3>
                <button className='button' disabled={page === lastPage}>
                    <Link className='Link' href={`/${pathname}?page=${(page < 1 || page == lastPage) ? page : +page + 1}`}>NEXT</Link>
                </button>
        </div>
    );
};

export default PaginationComponent;