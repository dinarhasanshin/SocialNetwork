import React from 'react';
import s from './NavWrapper.module.css';
import {NavLink} from "react-router-dom";
import {InlineIcon} from "@iconify/react";
import userCircle from "@iconify-icons/uil/user-circle";
import commentIcon from "@iconify-icons/uil/comment";
import usersAlt from "@iconify-icons/uil/users-alt";

const NavWrapper = () => {
    return (
        <section className={s.nav_wrapper}>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/profile">
                            <InlineIcon icon={ userCircle } className={s.nav_icons}/>
                            My Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/messages">
                            <InlineIcon icon={ commentIcon } className={s.nav_icons}/>
                            Messages
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/peoples">
                            <InlineIcon icon={ usersAlt } className={s.nav_icons}/>
                            Peoples
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </section>
    );
};

export default NavWrapper;