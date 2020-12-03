import React from 'react';
import s from './message_content.module.css';
import DialogItem from './Dialog_Item/dialog_item';
import MessagesItem from './Messages_Item/messages_item';
import {addMessageActionCreator, updateNewMessageText} from '../../redux/dialogs_reducer';





const message_content = (props) => {

    let state = props.store.getState();

    let dialog_elements = state.messagesPage.dialogs_data.map(p =>
        (
            <DialogItem name={p.name} id={p.id}/>
        )
    )
    let message_elements = state.messagesPage.messages_data.map(p =>
        (
            <MessagesItem message={p.message}/>
        )
    )

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.store.dispatch(updateNewMessageText(text))
    }

    return (
        <div className={s.messages_container}>
            <div className={s.dialogs_content}>
                <ul>
                    {dialog_elements}
                </ul>
            </div>
            <div className={s.messages_content}>
                <ul>
                    {message_elements}
                </ul>
            </div>
            <div className={s.messages_actions}>
                <div className={s.messages_add}>
                    <input type="text" onChange={ onMessageChange } value={state.messagesPage.newMessageText}/>
                </div>
                <div className={s.messages_action}>
                    <button onClick={ addMessage }>Send</button>
                </div>
            </div>
        </div>
    );
};

export default message_content;