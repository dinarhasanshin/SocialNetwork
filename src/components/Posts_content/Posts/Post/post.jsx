import React from 'react';
import s from './post.module.css';

const post = (props) =>{
    return(
        <div className={s.post_item}>
            <p></p>
            <p>{props.message}</p>
        </div>
    )
}
export default post;