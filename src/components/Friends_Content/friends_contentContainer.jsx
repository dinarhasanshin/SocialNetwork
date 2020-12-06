import React from 'react';
import Friends_content from "./friends_content";
import {followAC, setUsersAC, unFollowAC} from '../../redux/friends_reducer';
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    debugger;
    return{
        friendsCollection: state.friendsPage.friendsCollection
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        Follow: (userId) => {
            dispatch(followAC(userId));
        },
        unFollow: (userId) => {
            dispatch(unFollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

const friends_contentContainer = connect(mapStateToProps, mapDispatchToProps)(Friends_content)

export default friends_contentContainer;