import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {InlineIcon} from "@iconify/react";
import angleDown from "@iconify-icons/uil/angle-down";

const Header = (props) =>{

    return(
        <header className={s.header}>
            <p className={s.header_logo}>
                CubeFace
            </p>
            {props.isAuth
                ? <span className={s.header_auth} onClick={ props.toggleLogOutMenu }><p className={s.auth_name}  >{ props.login } </p>
                    {props.profile === null || props.profile.photos.large === null
                        ? <p className={s.auth_img}/>
                        : <img className={s.auth_img} src={props.profile.photos.large}/>
                    } <InlineIcon icon={angleDown}/>

            </span>
                :<span className={s.header_auth}><NavLink to={"/login"}>Login</NavLink></span>
            }
            {props.isAuth && props.logOutMenu && <div className={s.logOutMenu}><button onClick={ props.authLogout }>Log Out</button></div>}

        </header>
    )
}
export default Header;