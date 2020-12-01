import React from 'react';
import s from './messages_item.module.css';

const messagesItem = (props) => {
    return (
        <li className={s.item}>{props.message}</li>
    );
};

export default messagesItem;