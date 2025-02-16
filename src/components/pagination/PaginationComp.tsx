import Link from 'next/link';
import React, {FC} from 'react';
// import styles from "./PaginationComponent.module.css";

interface Props {
    pg: number,
    pathname: string,
    lastPage: number
}

const PaginationComp: FC<Props> = ({pg, pathname, lastPage}) => {

    const page = (pg? pg : 1);
    return (
        <div>
            <div >
                <button disabled={page === 1}>
                    <Link  href={`/${pathname}?page=${page > 1 ? page - 1 : 1}`}>prev</Link>
                </button>

                <button disabled={page === lastPage}>
                    <Link  href={`/${pathname}?page=${(page < 1 || page==lastPage)? page : +page + 1}`}>next</Link>
                </button>
            </div>
            <h3>You are on {page} page</h3>
        </div>
    );
};

export default PaginationComp;