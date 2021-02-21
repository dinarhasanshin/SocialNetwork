import React from 'react';
// @ts-ignore
import s from './Header.module.css';
import { NavLink } from "react-router-dom";
import { InlineIcon } from "@iconify/react";
import angleDown from "@iconify-icons/uil/angle-down";
import { ProfileType } from "../../types/types";
// @ts-ignore
import userPhoto from "../../assets/images/defaulIconProfile.png";

type PropsType = {
    isAuth: boolean,
    profile: ProfileType | null
    toggleLogOutMenu: () => void,
    login: string | null,
    authLogOutRedirect: () => void,
    logOutMenu: boolean
}

const Header: React.FC<PropsType> = (props) =>{

    return(
        <header className={s.header}>
            <p className={s.header_logo}>
                CF
            </p>
            {props.isAuth
                ? <span className={s.header_auth} onClick={ props.toggleLogOutMenu }>
                    <p className={s.auth_name}  >{ props.login } </p>
                    {props.profile === null || props.profile.photos.large === null
                        ? <img className={s.auth_img} src={userPhoto} alt={""}/>
                        : <img className={s.auth_img} src={props.profile.photos.large} alt={""}/>
                    } <InlineIcon icon={angleDown}/>

            </span>
                :/*<span className={s.header_auth}><NavLink to={"/login"}>Login</NavLink></span>*/
                <span className={s.header_auth}>
                    <NavLink to={"/login"} className={s.auth_name}>Login</NavLink>
                </span>
            }
            {props.isAuth && props.logOutMenu
            && <div className={s.logOutMenu}>
                <button onClick={ props.authLogOutRedirect }>Log Out</button>
            </div>}

        </header>
    )
}
export default Header;