import React, {ChangeEvent} from 'react';
// @ts-ignore
import s from "./ProfilePage.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfilePostsContainer from "./ProfilePosts/ProfilePostsContainer";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
// @ts-ignore
import userPhoto from '../../assets/images/defaulIconProfileSquad.png';
import {ProfileType} from "../../types/types";
import {InitialStateType} from "../../redux/profile_reducer";

type PropsType = {
    profile: ProfileType,
    profilePage: InitialStateType,
    savePhoto: (file: File) => void,
    isOwner: boolean,
    saveProfile: (profile: ProfileType) => void,
    status: string | null,
    updateUserStatus: (status: string) => void
}

const ProfilePage: React.FC<PropsType> = ({ savePhoto, isOwner, ...props }) => {

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length){
            savePhoto(e.target.files[0]);
        }
    }

    return (
            <section className={s.profile_content}>
                <div className={s.profile_left}>
                    <div className={s.profile_photo + " " + s.content_block_size}>
                        {props.profile === null || props.profile.photos.large == null
                            ? <div className={s.photo_item_img}>
                                <img src={userPhoto} alt=""/>
                        </div>
                            : <img className={s.photo_item} src={props.profile.photos.large} alt={""}/>}

                        {isOwner
                        && <div className={s.photo_edit_btn_div}>
                            <input type={"file"} id={"input_file"} className={s.input_file} onChange={onMainPhotoSelected} />
                            <label htmlFor={"input_file"} className={s.photo_edit_btn}>EditPhoto</label>
                        </div>}

                    </div>
                </div>
                <div className={s.profile_right}>
                    <div className={s.profile_data + " " + s.content_block_size}>
                        <div className={s.data_header}>
                            <b><span className="Name">{props.profile === null ? props.profilePage.profile.fullName : props.profile.fullName}</span></b>
                            <ProfileStatus status={ props.status } isOwner={ isOwner } updateUserStatus={ props.updateUserStatus }/>
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