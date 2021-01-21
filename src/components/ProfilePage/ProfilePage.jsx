import React from 'react';
import s from "./ProfilePage.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfilePostsContainer from "./ProfilePosts/ProfilePostsContainer";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfilePage = (props) => {

    return (
            <section className={s.profile_content}>
                <div className={s.profile_left}>
                    <div className={s.profile_photo + " " + s.profile_content_block}>
                        {props.profile === null || props.profile.photos.large == null
                            ? <div className={s.photo_item}><p className={s.profile_photo}></p></div>
                            : <img className={s.photo_item} src={props.profile.photos.large}/>}
                        <button className={s.photo_edit_btn}>Edit</button>
                    </div>
                </div>
                <div className={s.profile_right}>
                    <div className={s.profile_data + " " + s.profile_content_block}>
                        <div className={s.data_header}>
                            <span className="Name">{props.profile === null ? props.profilePage.fullName : props.profile.fullName}</span>
                            <ProfileStatus status={ props.status } updateUserStatus={ props.updateUserStatus }/>
                            <hr/>
                        </div>
                            <ProfileInfo dataContacts={ props.profilePage.dataContacts }/>
                    </div>
                    <ProfilePostsContainer/>
                </div>
            </section>
    );
};

export default ProfilePage;