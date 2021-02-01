import s from "../ProfileInfo.module.css";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../common/FormsControl/FormsControl";

const ProfileDataForm = ({ handleSubmit, profile }) => {
    return(
            <form className={s.data_contacts} onSubmit={ handleSubmit }>
                <button>Save</button> <div>EditMode</div>
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

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;