import React from 'react';
import s from "./PeopleItem.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/default_user_image.png";

const PeopleItem = (props) => {
    let u = props.user;
    return (
/*        <>
            <div className={s.people_item}>
                <div className={s.people_item_content}>
                    <p className={s.people_item_img}/>
                    {/!*<img className={s.people_item_img} src="" alt=""/>*!/}
                    <span className={s.people_item_name}>Dinar Hasanshin</span>
                    <button className={s.people_item_btn}>Follow</button>
                </div>
                <hr/>
            </div>
        </>*/
        <div className={s.people_item}>
            <div className={s.people_item_content}>
                <NavLink to={"/profile/" + u.id}>
                    <img className={s.people_item_img}
                         src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                </NavLink>
                <div className={s.people_item_name}>
                    <span>{u.name}</span>
                    {u.status && <span> | {u.status}</span>}

                </div>
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
            <hr/>
        </div>
    );
};

export default PeopleItem;