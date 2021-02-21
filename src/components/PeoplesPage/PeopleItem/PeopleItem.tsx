import React from 'react';
// @ts-ignore
import s from "./PeopleItem.module.css";
import { NavLink } from "react-router-dom";
// @ts-ignore
import userPhoto from "../../../assets/images/defaulIconProfile.png";
import { FriendsCollectionType } from "../../../types/types";

type PropsType = {
    user: FriendsCollectionType,
    isFollowing: Array<number>,
    follow: (userId: number ) => void,
    unFollow: (userId: number) => void
}

const PeopleItem: React.FC<PropsType> = (props) => {
    let u = props.user;
    return (
        <div className={s.people_item}>
            <div className={s.people_item_content}>
                <NavLink to={"/profile/" + u.id}>
                    <div className={s.people_item_img_div}>
                        <p className={s.people_item_img}>
                           <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                        </p>
                    </div>
                </NavLink>
                <div className={s.people_item_name}>
                    <span>{u.name}</span>
                    {u.status && <span> | {u.status}</span>}

                </div>
                <div className={s.people_item_btn_div}>
                    {u.followed
                        ? <button
                            className={props.isFollowing.some(id => id === u.id)
                                ? s.people_item_btn_disable
                                : s.people_item_btn} onClick={(e) =>
                        {props.unFollow(u.id)}}>UnFollow</button>
                        : <button
                            className={props.isFollowing.some(id => id === u.id)
                                ? s.people_item_btn_disable
                                : s.people_item_btn} onClick={(e) =>
                        {props.follow(u.id)}}>Follow</button>
                    }
                </div>
            </div>
            <hr/>
        </div>
    );
};

export default React.memo(PeopleItem);