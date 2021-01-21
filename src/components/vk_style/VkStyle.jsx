import React from 'react';
import s from './VkStyle.module.css';
import {InlineIcon, Icon} from '@iconify/react';
import userCircle from '@iconify-icons/uil/user-circle';
import commentIcon from '@iconify-icons/uil/comment';
import usersAlt from '@iconify-icons/uil/users-alt';
import angleDown from '@iconify-icons/uil/angle-down';
import thumbsUp from '@iconify-icons/uil/thumbs-up';



const VkStyle = () => {
    return (
        <div className={s.container}>
            <header className={s.header}>
                <p className={s.header_logo}>
                    CubeFace
                </p>
                <span className={s.header_auth}>
                    <p className={s.auth_name}>Dinar</p>
                    <p className={s.auth_img}></p>
                    <InlineIcon icon={ angleDown }/>
                </span>
            </header>
            <section className={s.nav_wrapper}>
                <nav>
                    <ul>
                        <li>
                            <a href="/">
                                <InlineIcon icon={ userCircle } className={s.nav_icons}/>
                                My Profile
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <InlineIcon icon={ commentIcon } className={s.nav_icons}/>
                                Messages
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <InlineIcon icon={ usersAlt } className={s.nav_icons}/>
                                Peoples
                            </a>
                        </li>
                    </ul>
                </nav>
            </section>
            <section className={s.profile_content}>
                <div className={s.profile_left}>
                    <div className={s.profile_photo + " " + s.profile_content_block}>
                        <div className={s.photo_item}></div>
                        <button className={s.photo_edit_btn}>Edit</button>
                    </div>
                </div>
                <div className={s.profile_right}>
                    <div className={s.profile_data + " " + s.profile_content_block}>
                        <div className={s.data_header}>
                            <p>Dinar Hasanshin</p>
                            <p>Your status</p>
                            <hr/>
                        </div>
                        <div className={s.data_contacts}>
                            <div className={s.data_contacts_header}>Contacts <hr/></div>
                            <ul>
                                <li><span>Github:</span> <a href="http://www.youtube.com/staryi_channel_84">Github</a></li>
                                <li><span>Vk:</span> <a href="http://www.youtube.com/staryi_channel_84">Vk</a></li>
                                <li><span>Facebook:</span> <a href="http://www.youtube.com/staryi_channel_84">Facebook</a></li>
                                <li><span>Instagram:</span> <a href="http://www.youtube.com/staryi_channel_84">Instagram</a></li>
                                <li><span>Twitter:</span> <a href="http://www.youtube.com/staryi_channel_84">Twitter</a></li>
                                <li><span>WebSite:</span> <a href="http://www.youtube.com/staryi_channel_84">WebSite</a></li>
                                <li><span>YouTube:</span> <a href="http://www.youtube.com/staryi_channel_84">YouTube</a></li>
                                <li><span>MainLink:</span> <a href="http://www.youtube.com/staryi_channel_84">MainLink</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={s.posts_input  + " " + s.profile_content_block}>
                        <div className={s.posts_input_left}>
                            <p className={s.posts_img}></p>
                            <input className={s.posts_textarea} placeholder={"Enter your post"}/>
                        </div>
                        <div>
                            <button className={s.posts_btn_send}>Send</button>
                        </div>
                    </div>
                    <div className={s.posts_collection}>
                        <div className={s.post_item   + " " + s.profile_content_block}>
                            <div className={s.post_item_header}>
                                <p className={s.post_item_img}></p>
                                <p className={s.post_name}>Dinar Hasanshin</p>
                            </div>
                            <div className={s.post_item_bottom}>
                                Я обязательно выполню это обещание в следующем году!

                                Найдите свою идеальную цель в приложении Новогодний шар обещаний от Сбербанка.
                            </div>
                            <hr/>
                            <div className={s.post_item_reaction}>
                                <InlineIcon icon={ thumbsUp } className={s.post_like_icon}/>
                            {/*    <Icon icon={ thumbsUp } flip="vertical" className={s.post_like_icon}/>*/}
                            </div>
                        </div>
                        <div className={s.post_item   + " " + s.profile_content_block}>
                            <div className={s.post_item_header}>
                                <p className={s.post_item_img}></p>
                                <p className={s.post_name}>Dinar Hasanshin</p>
                            </div>
                            <div className={s.post_item_bottom}>
                                Я обязательно выполню это обещание в следующем году!

                                Найдите свою идеальную цель в приложении Новогодний шар обещаний от Сбербанка.
                            </div>
                            <hr/>
                            <div className={s.post_item_reaction}>
                                <InlineIcon icon={ thumbsUp } className={s.post_like_icon}/>
                                {/*    <Icon icon={ thumbsUp } flip="vertical" className={s.post_like_icon}/>*/}
                            </div>
                        </div>
                        <div className={s.post_item   + " " + s.profile_content_block}>
                            <div className={s.post_item_header}>
                                <p className={s.post_item_img}></p>
                                <p className={s.post_name}>Dinar Hasanshin</p>
                            </div>
                            <div className={s.post_item_bottom}>
                                Я обязательно выполню это обещание в следующем году!

                                Найдите свою идеальную цель в приложении Новогодний шар обещаний от Сбербанка.
                            </div>
                            <hr/>
                            <div className={s.post_item_reaction}>
                                <InlineIcon icon={ thumbsUp } className={s.post_like_icon}/>
                                {/*    <Icon icon={ thumbsUp } flip="vertical" className={s.post_like_icon}/>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VkStyle;