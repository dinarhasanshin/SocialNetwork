import React from 'react';
import s from './PeoplesPage.module.css';
import Paginator from "../common/Paginator/Paginator";
import PeopleItem from "./PeopleItem/PeopleItem";

const PeoplesPage = (
    {currentPage, totalUserCount,pageSize, onPageChanged, friendsCollection, unFollow, follow, isFollowing, ...props}) => {
    return (
        <section className={s.peoples_content + " " + s.content_block_size}>
           {/* <Paginator currentPage={ currentPage } totalItemsCount={ totalUserCount }
                       pageSize={ pageSize } onPageChanged={ onPageChanged }/>*/}
            {friendsCollection.map(u =>
                <PeopleItem key={ u.id } user={ u } unFollow={ unFollow }
                            follow={ follow } isFollowing={ isFollowing } />
                )
            }
        </section>
    );
};

export default PeoplesPage;