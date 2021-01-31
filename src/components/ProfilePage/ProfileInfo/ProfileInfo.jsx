import React, {useState} from 'react';
import s from "./ProfileInfo.module.css";
import ProfileDataForm from './ProfileDataForm/ProfileDataForm';

const ProfileInfo = ({saveProfile, ...props}) => {

    let [editMode, setEditMode] = useState(false);


    const onSubmit = (formData) => {
        console.log(formData);
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

const ProfileData = (props) => {
    return(
        <div className={s.data_contacts}>
            {props.isOwner && <button onClick={props.goToEditMode}>Edit</button>
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
                    return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
                })}
            </ul>
        </div>
    )
}



const Contact = ({contactTitle, contactValue}) => {
    return(
        <li><b>{ contactTitle }:</b> {contactValue !== null && contactValue.length ? contactValue : "NaN"}</li>
    )
};

export default ProfileInfo;