import React from 'react';
import {NavLink} from "react-router-dom";
import s from './dialog_item.module.css';

const dialog_item = (props) => {
    return(
        <li className={s.item}>

            <NavLink to={"/messages_content/" + props.id} activeClassName={s.active}>
                <span className={s.dialog_img}></span>
                {props.name}
            </NavLink>
        </li>
    );
}

export default dialog_item;