import React from 'react';
// @ts-ignore
import s from './PeoplesPage.module.css';
import Paginator from "../common/Paginator/Paginator";
import PeopleItem from "./PeopleItem/PeopleItem";
import {FriendsCollectionType} from "../../types/types";

type PropsTypes = {
    currentPage: number,
    totalUserCount: number,
    pageSize: number,
    onPageChanged: (pageNumber: number) => void,
    friendsCollection: Array<FriendsCollectionType>,
    unFollow: (userId: number) => void,
    follow: (userId: number) => void,
    isFollowing: Array<number>
}

const PeoplesPage: React.FC<PropsTypes> = (
    {currentPage, totalUserCount,pageSize,
        onPageChanged, friendsCollection, unFollow,
        follow, isFollowing}) => {
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