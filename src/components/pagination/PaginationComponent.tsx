// 'use client'
// import {IUser} from "@/models/IUser";
// import {useEffect, useState} from "react";
// import UserComponent from "@/components/user/UserComponent";
//
// type PaginationComponentType = {
//     totalPages: number;
//     searchedUsers: IUser[];
// }
//
// export const PaginateSearchedUsers = ({searchedUsers, totalPages}: PaginationComponentType) => {
//     const [currentPage, setCurrentPage] = useState<number>(1);
//     // let currentPage = Number(searchParams.get('page') || '1');
//     const [displayedUsers, setDisplayedUsers] = useState<IUser[]>([]);
//
//     useEffect(() => {
//         const startIndex = (currentPage - 1) * 5;
//         const endIndex = startIndex + 5;
//         setDisplayedUsers(searchedUsers.slice(startIndex, endIndex));
//     }, [currentPage, searchedUsers]);
//
//     const handleNextPage = () => {
//         if (currentPage < totalPages) {
//             setCurrentPage((prevPage) => prevPage + 1);
//         }
//     };
//
//     const handlePreviousPage = () => {
//         if (currentPage > 1) {
//             setCurrentPage((prevPage) => prevPage - 1);
//         }
//     };
//
//     return (
//         <div className='pagination'>
//             {
//                 displayedUsers.map(user => <UserComponent key={user.id} user={user}/>)
//             }
//             <button onClick={handlePreviousPage} disabled={currentPage === 1}>
//                 Previous
//             </button>
//             <h3>You are on {currentPage} page</h3>
//             <button onClick={handleNextPage} disabled={currentPage === totalPages}>
//                 Next
//             </button>
//         </div>
//     );
// };
//
