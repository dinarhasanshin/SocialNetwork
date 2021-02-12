import React from 'react';
// @ts-ignore
import s from "./PostItem.module.css";
import {InlineIcon} from "@iconify/react";
import thumbsUp from "@iconify-icons/uil/thumbs-up";

type PropsType = {
    message: string,
    username: string,
    photos: string
}

const PostItem: React.FC<PropsType> = (props) => {
    return (
        <div className={s.post_item   + " " + s.content_block_size}>
            <div className={s.post_item_header}>
                <img className={s.post_item_img} src={ props.photos } alt={""}/>
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