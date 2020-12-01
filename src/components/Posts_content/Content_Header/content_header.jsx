import React from 'react';
import s from './content_header.module.css';
import Photos from "../Photos/photos";

const content_header = () =>{
    return(
        <div className={s.content_header_top}>
            <div className={s.content_header}>
                <div className={s.photo}>
                    <p className={s.profile_photo}></p>
                </div>
                <div className={s.settings}>
                    <a href="/" className={s.edit_profile}>Edit profile</a>
                    <a href="/" className={s.profile_settings}>Profile settings</a>
                </div>
            </div>
            <div className={s.content_photo}>
                <div className={s.person_name}>
                    <span className="Name">Dinar Hasanshin</span>
                </div>
                <Photos/>
            </div>
        </div>
    )
}
export default content_header;