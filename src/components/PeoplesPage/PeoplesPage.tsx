import React, { ChangeEvent } from 'react';
// @ts-ignore
import s from './PeoplesPage.module.css';
import PeopleItem from "./PeopleItem/PeopleItem";
import { FriendsCollectionType } from "../../types/types";
import PeoplesSearchForm from "./PeoplesSearchForm/PeoplesSearchForm";
import Paginator from "../common/Paginator/Paginator";
import PreLoader from "../common/PreLoader/PreLoader";

type PropsTypes = {
    currentPage: number,
    totalUserCount: number,
    pageSize: number,
    onPageChanged: (pageNumber: number) => void,
    onFilterChanged: (term: string) => void
    friendsCollection: Array<FriendsCollectionType>,
    unFollow: (userId: number) => void,
    follow: (userId: number) => void,
    isFollowing: Array<number>,
    isFetching: boolean,
    toggleFriends: (isFriends: boolean | null) => void,
    isFriends: boolean | null
}

const PeoplesPage: React.FC<PropsTypes> = (
    {currentPage, totalUserCount,pageSize,
        onPageChanged, friendsCollection, unFollow,
        follow, isFollowing, onFilterChanged, isFetching, toggleFriends, isFriends}) => {

    const toggleFriendsChange = (e:ChangeEvent<HTMLSelectElement>) => {
        let isFriends: string = e.target.value;
        if (isFriends === "true"){
            toggleFriends(true);
        }else if(isFriends === "false"){
            toggleFriends(false);
        }else if(isFriends === "null"){
            toggleFriends(null);
        }
    }

    return (
        <section className={s.peoples_content}>
            <div className={s.peoples_left_content + " " + s.content_block_size}>
                <Paginator currentPage={currentPage} totalItemsCount={totalUserCount}
                           pageSize={pageSize} onPageChanged={onPageChanged}/>

                <PeoplesSearchForm onFilterChanged={onFilterChanged}/>

                {
                    isFetching
                        ? <PreLoader/>
                        : friendsCollection.map(u =>
                            <PeopleItem key={u.id} user={u} unFollow={unFollow}
                                        follow={follow} isFollowing={isFollowing}/>)

                }
            </div>

            <div className={s.peoples_right_content + " " + s.content_block_size_right}>
                <select multiple={ true } onChange={toggleFriendsChange}>
                    <option className={ isFriends === null&& s.selected } value="null" selected>All</option>
                    <option className={ isFriends === true&& s.selected } value="true">Friends</option>
                    <option className={ isFriends === false&& s.selected } value="false">Other Peoples</option>
                </select>
            </div>
        </section>
    );
};

export default React.memo(PeoplesPage);

/*
friendsCollection.map(u =>
                            <PeopleItem key={u.id} user={u} unFollow={unFollow}
                                        follow={follow} isFollowing={isFollowing}/>)
*/

