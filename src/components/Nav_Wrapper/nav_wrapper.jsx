import React from 'react';
import logo from "../../logo_Earth.png";
import {InlineIcon} from "@iconify/react";
import profileIcon from "@iconify-icons/uil/chat-bubble-user";
import newsIcon from "@iconify-icons/uil/newspaper";
import friendsIcon from "@iconify-icons/uil/user";
import groupsIcon from "@iconify-icons/uil/users-alt";
import messageIcon from '@iconify-icons/uil/comment';
import s from './nav_wrapper.module.css';
import {NavLink} from "react-router-dom";

const nav_wrapper = () =>{
    return(
        <section className={s.nav_wrapper}>
            <div className={s.logo}>
                {/*                  <span className="logo_span"></span>*/}
                <img src={logo} alt="Earth"/>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/profile" activeClassName={s.active}><InlineIcon icon={profileIcon} width="23"/></NavLink>
                    </li>
                    <li>
                        <a href="/"><InlineIcon icon={newsIcon} width="23"/></a>
                    </li>
                    <li>
                        <NavLink to="/messages_content" activeClassName={s.active}><InlineIcon icon={messageIcon} width="23"/></NavLink>
                    </li>
                    <li>
                        <a href="/"><InlineIcon icon={groupsIcon} width="23"/></a>
                    </li>
                    <li>
                        <NavLink to="/friends_content"><InlineIcon icon={friendsIcon} width="23"/></NavLink>
                    </li>
                </ul>
            </nav>
            {/*                <div className="open_nav">
                    <button><InlineIcon icon={arrowRightIcon} width="23"/></button>
                </div>*/}
        </section>
    )
}

export default nav_wrapper;