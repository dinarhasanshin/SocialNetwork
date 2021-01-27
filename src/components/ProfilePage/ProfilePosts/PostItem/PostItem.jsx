import React from 'react';
import s from "./PostItem.module.css";
import {InlineIcon} from "@iconify/react";
import thumbsUp from "@iconify-icons/uil/thumbs-up";

const PostItem = (props) => {
    return (
        <div className={s.post_item   + " " + s.profile_content_block}>
            <div className={s.post_item_header}>
                <img className={s.post_item_img} src={ props.photos }/>
                <p className={s.post_name}>{ props.username }</p>
            </div>
            <div className={s.post_item_bottom}>
                { props.message }
            </div>
            <hr/>
            <div className={s.post_item_reaction}>
                <InlineIcon icon={ thumbsUp } className={s.post_like_icon}/>
            </div>
        </div>
    );
};

export default PostItem;