import React from 'react';
import s from './content_header.module.css';
import ProfileStatusWithHooks from "./Profile_Status/profile_statusWithHooks";

const content_header = (props) =>{
    return(
        <div className={s.content_header_top}>
            <div className={s.content_header}>
                <div className={s.photo}>
                    {props.profile === null
                        ? <p className={s.profile_photo}></p>
                        : <img className={s.profile_photo} src={props.profile.photos.large}/>}
                </div>
                <div className={s.settings}>
{/*                    <a href="/" className={s.edit_profile}>Edit profile</a>
                    <a href="/" className={s.profile_settings}>Profile settings</a>*/}
                    <ProfileStatusWithHooks status={ props.status } updateUserStatus={ props.updateUserStatus }/>
                </div>
            </div>
            <div className={s.content_photo}>
                <div className={s.person_name}>
                    <span className="Name">{props.profile === null ? props.profilePage.fullName : props.profile.fullName}</span>
                </div>
            </div>
        </div>
    )
}
export default content_header;