import React, { useState, useEffect, ChangeEvent } from 'react';
// @ts-ignore
import s from './ProfileStatus.module.css';


type PropsType = {
    status: string | null,
    isOwner: boolean,
    updateUserStatus: (status: string) => void
}

const ProfileStatus: React.FC<PropsType> = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const toggleEditMode = () => {
        if (props.isOwner){
            setEditMode(!editMode);
            if(status)
            props.updateUserStatus(status);
        }

    }

    const onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode
                ? <div> <span className={s.profile_status_input}
                              onClick={() => {
                                  toggleEditMode()
                              }}>{props.status}</span></div>

                : <div><input   autoFocus={true}
                              onBlur={() => {toggleEditMode()}} value={status!== null ? status : ""}
                              onChange={onStatusChange}/></div>
            }
        </div>
    );
}

export default ProfileStatus;