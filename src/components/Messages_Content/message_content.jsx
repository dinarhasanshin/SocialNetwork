import React from 'react';
import s from './message_content.module.css';
import DialogItem from './Dialog_Item/dialog_item';
import MessagesItem from './Messages_Item/messages_item';
import {Field, reduxForm} from "redux-form";


const message_content = (props) => {

    let state = props.messagesPage;

    let dialog_elements = state.dialogs_data.map(p =>
        (
            <DialogItem name={p.name} id={p.id}/>
        )
    )
    let message_elements = state.messages_data.map(p =>
        (
            <MessagesItem message={p.message}/>
        )
    )

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageText);
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
            <AddMessageFormRedux onSubmit={ addNewMessage } />
        </div>
    );
};

const AddMessageForm = (props) => {
    return (
        <form onSubmit={ props.handleSubmit } className={ s.messages_actions }>
                <div className={ s.messages_add }>
                    <Field component={ "input" } name={ "newMessageText" }/>
                </div>
                <div className={ s.messages_action }>
                    <button>Send</button>
                </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({
    form: 'messageAdd'
})(AddMessageForm);



export default message_content;