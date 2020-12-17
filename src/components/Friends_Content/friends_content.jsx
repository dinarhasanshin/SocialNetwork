import React from 'react';
import s from "./friends_content.module.css";
import userPhoto from "../../assets/images/default_user_image.png";
import {NavLink} from "react-router-dom";

const friends_content = (props) => {

    let pagesCount = Math.ceil(props.totalUserCount/props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++){
        pages.push(i);
    }

    return (
        <div className={s.friends_container}>
            <div>
                {
                    pages.map(p => {
                        return <span className={props.currentPage === p ? s.selectedPage : ""}
                                     onClick={ (e) => { props.onPageChanged(p) } }>{p}</span>
                    })
                }
            </div>
            {
                props.friendsCollection.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={"/profile/" + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.user_photo}
                                     alt="AvatarIcon"/>
                            </NavLink>
                        </div>
                        <span>
                            <div>{u.name}</div>
                        </span>
                        <div>
                            {u.followed
                                ? <button className={props.isFollowing.some(id => id === u.id) ? s.disable : s.active} onClick={ (e) => { props.unFollow(u.id) } }>UnFollow</button>
                                : <button className={props.isFollowing.some(id => id === u.id)  ? s.disable : s.active} onClick={ (e) => {  props.follow(u.id) } }>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                            <div>{u.status}</div>
                        </span>
                </div>)
            }
        </div>
    );
};

export default friends_content;