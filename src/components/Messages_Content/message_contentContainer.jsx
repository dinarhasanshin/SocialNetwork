import React from 'react';
import MessagesContent from './message_content';
import {addMessage, updateNewMessageText} from '../../redux/dialogs_reducer';
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
}

export default compose(
    connect(mapStateToProps, {addMessage, updateNewMessageText}),
    withAuthRedirect
)(MessagesContent);