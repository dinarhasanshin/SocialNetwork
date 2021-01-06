import React, {useState, useEffect} from 'react';
import s from './profile_status.module.css';


const Profile_statusWithHooks = (props) => {

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
        <div className={s.profile_status}>
            {!editMode
                ? <div> <span className={s.profile_status_input}
                              onDoubleClick={() => {
                                  activatedEditMode()
                              }}>{props.status}</span></div>

                : <div><input className={s.profile_status_input}  autoFocus={true}
                              onBlur={() => {deactivatedEditMode()}} value={status}
                              onChange={onStatusChange}/></div>
            }
        </div>
    );
}

export default Profile_statusWithHooks;