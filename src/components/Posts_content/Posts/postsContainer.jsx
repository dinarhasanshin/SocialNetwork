import React from 'react';
import Posts from './posts';
import {addPostActionCreator, updateNewPostText} from '../../../redux/profile_reducer';
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return{
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostText(text))
        }
    }
}

const postsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts)

export default postsContainer;