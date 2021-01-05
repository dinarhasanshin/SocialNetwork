import React from 'react';
import s from './header.module.css';
import {NavLink} from "react-router-dom";

const header = (props) =>{
    return(
        <header className={s.header_top}>
            <div className={s.login_block}>
                {props.isAuth
                    ?<div><span>{props.login}</span> - <button onClick={props.authLogout}>Log Out</button></div>
                    :<NavLink to={"/login"}>Login</NavLink>}

            </div>
        </header>
    )
}
export default header;