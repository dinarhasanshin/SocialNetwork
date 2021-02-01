import React from 'react';
import s from "./ProfilePage.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfilePostsContainer from "./ProfilePosts/ProfilePostsContainer";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import userPhoto from '../../assets/images/defaulIconProfileSquad.png';

const ProfilePage = ({ savePhoto, isOwner, ...props }) => {

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length){
            savePhoto(e.target.files[0]);
        }
    }

    return (
            <section className={s.profile_content}>
                <div className={s.profile_left}>
                    <div className={s.profile_photo + " " + s.content_block_size}>
                        {props.profile === null || props.profile.photos.large == null
                            ? <div className={s.photo_item_img}>
                                {/*<p className={s.profile_photo}></p>*/}
                                <img src={userPhoto} alt=""/>
                        </div>
                            : <img className={s.photo_item} src={props.profile.photos.large} alt={""}/>}

                        {isOwner
                        && <div className={s.photo_edit_btn_div}>
                            <input type={"file"} id={"input_file"} className={s.input_file} onChange={onMainPhotoSelected} />
                            <label for={"input_file"} className={s.photo_edit_btn}>EditPhoto</label>
                        </div>}

                    </div>
                </div>
                <div className={s.profile_right}>
                    <div className={s.profile_data + " " + s.content_block_size}>
                        <div className={s.data_header}>
                            <b><span className="Name">{props.profile === null ? props.profilePage.fullName : props.profile.fullName}</span></b>
                            <ProfileStatus status={ props.status } updateUserStatus={ props.updateUserStatus }/>
                            <hr/>
                        </div>
                            <ProfileInfo profile={ props.profile }
                                         isOwner={ isOwner } saveProfile={ props.saveProfile }/>

                    </div>
                    <ProfilePostsContainer/>
                </div>
            </section>
    );
};

export default ProfilePage;