import React from 'react';
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {

    let dataContacts = props.dataContacts.map(p =>
        (
            <li><span>{p.type}:</span> <a href={p.value}>{p.type}</a></li>
        )
    )



    return (
        <div className={s.data_contacts}>
            <div className={s.data_contacts_header}>Contacts <hr/></div>
            <ul>
                { dataContacts }
            </ul>
        </div>

    );
};

export default ProfileInfo;