import React, {useState} from 'react';
import s from "./Paginator.module.css";

const Paginator = ({portionSize = 10, ...props}) => {

    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);

    const [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;



    return (
        <div className={s.paginator_page}>
            {
                portionNumber > 1 &&
                <button onClick={ () => {setPortionNumber(portionNumber - 1)}}>&lt; &lt;</button>}

            {
                pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionNumber)
                    .map(p => {
                    return <span className={props.currentPage === p ? s.selectedPage : "" + " " + s.page_item}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })
            }

            {
                portionCount > portionNumber &&
                <button onClick={ () => { setPortionNumber(portionNumber + 1) } }>&gt; &gt;</button>
            }
        </div>
    );
};

export default React.memo(Paginator);