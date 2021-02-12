import React, {useState} from 'react';
// @ts-ignore
import s from "./ProfileInfo.module.css";
import ProfileDataForm from './ProfileDataForm/ProfileDataForm';
import {ContactsType, ProfileType} from "../../../types/types";

type LoginFormValuesType = {
    fullName: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    aboutMe: string,
    contacts: ContactsType
}

type ProfileInfoPropsType = {
    saveProfile: (profile: ProfileType) => void,
    profile: ProfileType,
    isOwner: boolean

}


const ProfileInfo: React.FC<ProfileInfoPropsType> = ({saveProfile, ...props}) => {

    let [editMode, setEditMode] = useState(false);


    const onSubmit = (formData: ProfileType) => {
        saveProfile(formData);
        setEditMode(false);
    }

    return (
        <>
            {editMode
                ? <ProfileDataForm initialValues={ props.profile } profile={ props.profile } onSubmit={ onSubmit }/>
                : <ProfileData goToEditMode={ () => { setEditMode(true) } } profile={ props.profile } isOwner={ props.isOwner }/>
            }
        </>
    );
};

type ProfileDataPropsType = {
    goToEditMode: () => void,
    isOwner: boolean,
    profile: ProfileType
}

const ProfileData: React.FC<ProfileDataPropsType> = (props) => {
    return(
        <div className={s.data_contacts}>
            {props.isOwner && <button className={s.btn_editMode} onClick={props.goToEditMode}>Edit</button>
            }
            <div className={s.data_contacts_header}>Job <hr/></div>
            <ul>

                <li> <b>Looking for a job:</b> { props.profile.lookingForAJob ? "Yes" : "No" }</li>

                <li> <b>Skills:</b> { props.profile.lookingForAJobDescription
                    ? props.profile.lookingForAJobDescription
                    : "NoDescription" }</li>

            </ul>
            <div className={s.data_contacts_header}>AboutMe <hr/></div>
            <ul>

                <li>{ props.profile.aboutMe}</li>

            </ul>
            <div className={s.data_contacts_header}>Contacts <hr/></div>
            <ul>
                {Object.keys(props.profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key}
                                    contactValue={ props.profile.contacts[key as keyof ContactsType] }/>
                })}
            </ul>
        </div>
    )
}


type ContactPropsType = {
    contactTitle: string | null,
    contactValue: string | null
}

const Contact: React.FC<ContactPropsType> = ({contactTitle, contactValue}) => {
    return(
        <li><b>{ contactTitle }:</b> {contactValue !== null && contactValue.length ? contactValue : "NaN"}</li>
    )
};

export default ProfileInfo;