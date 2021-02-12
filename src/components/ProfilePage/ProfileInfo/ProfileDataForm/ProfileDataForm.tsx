// @ts-ignore
import s from "../ProfileInfo.module.css";
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../../common/FormsControl/FormsControl";
import {ContactsType, ProfileType} from "../../../../types/types";


type ProfileInfoFormOwnPropsType = {
    profile: ProfileType
}


const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, ProfileInfoFormOwnPropsType> & ProfileInfoFormOwnPropsType > = ({ handleSubmit, profile }) => {
    return(
            <form className={s.data_contacts} onSubmit={ handleSubmit }>
                <button className={s.btn_editMode}>Save</button>
                <div className={s.data_contacts_header}>Job <hr/></div>
                <ul>
                    <li>FullName: <Field component={Input} type={"text"} name={"fullName"}/></li>

                    <li>Looking for a job: <Field component={Input} type={"checkbox"} name={"lookingForAJob"} placeholder={"JobLooking"}/></li>

                    <li>Skills: <Field component={Input} type={"text"}  name={"lookingForAJobDescription"} placeholder={"ProfSkills"}/></li>

                    <li>AboutMe: <Field component={Input} type={"text"} name={"aboutMe"}/></li>
                </ul>
                <div className={s.data_contacts_header}>Contacts <hr/></div>
                <ul>
                    {Object.keys(profile.contacts).map(key => {
                        return <div> {key}: <Field component={Input} type={"text"} name={"contacts." + key} placeholder={key}/> </div>
                    })}
                </ul>
            </form>
    )
}

const ProfileDataFormReduxForm = reduxForm<ProfileType, ProfileInfoFormOwnPropsType>({ form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;