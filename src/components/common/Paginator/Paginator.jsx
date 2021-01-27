import React, {useState} from 'react';
import s from "./Paginator.module.css";

const Paginator = ({portionSize = 10, ...props}) => {

    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);

    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;



    return (
        <div>
            {
                portionNumber > 1 &&
                <button onClick={ () => {setPortionNumber(portionNumber - 1)}}>PREV</button>}

            {
                pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionNumber)
                    .map(p => {
                    return <span className={props.currentPage === p ? s.selectedPage : ""}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })
            }

            {
                portionCount > portionNumber &&
                <button onClick={ () => { setPortionNumber(portionNumber + 1) } }>NEXT</button>
            }
        </div>
    );
};

export default Paginator;