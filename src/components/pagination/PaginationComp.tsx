import Link from 'next/link';
import React, {FC} from 'react';
// import styles from "./PaginationComponent.module.css";

interface Props {
    pg: number,
    pathname: string,
}

const PaginationComp: FC<Props> = ({pg, pathname}) => {

    const page = (pg? pg : 1);
    return (
        <div>
            <div >
                <button disabled={page === 1}>
                    <Link  href={`/${pathname}?page=${page > 1 ? page - 1 : 1}`}>prev</Link>
                </button>

                <button disabled={page == 13}>
                    <Link  href={`/${pathname}?page=${page < 1 ? 1 : +page + 1}`}>next</Link>
                </button>
            </div>
            <h3>You are on {page} page</h3>
        </div>
    );
};

export default PaginationComp;