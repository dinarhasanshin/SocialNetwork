import React from 'react';
import MessagesContent from './message_content';
import {addMessageActionCreator, updateNewMessageText} from '../../redux/dialogs_reducer';
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        onMessageChange: (text) => {
            dispatch(updateNewMessageText(text))
        }
    }
}


const message_contentContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesContent)

export default message_contentContainer;