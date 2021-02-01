import React, {useState, useEffect} from 'react';
import s from './ProfileStatus.module.css';


const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activatedEditMode = () => {
        setEditMode(true);
    }

    const deactivatedEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode
                ? <div> <span className={s.profile_status_input}
                              onClick={() => {
                                  activatedEditMode()
                              }}>{props.status}</span></div>

                : <div><input   autoFocus={true}
                              onBlur={() => {deactivatedEditMode()}} value={status}
                              onChange={onStatusChange}/></div>
            }
        </div>
    );
}

export default ProfileStatus;