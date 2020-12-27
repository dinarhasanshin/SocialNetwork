import React from 'react';
import Posts from './posts';
import {addPost, addPostActionCreator, updateNewPostText} from '../../../redux/profile_reducer';
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return{
        profilePage: state.profilePage
    }
}

const postsContainer = connect(mapStateToProps,{updateNewPostText, addPost})(Posts)

export default postsContainer;