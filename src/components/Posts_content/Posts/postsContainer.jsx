import React from 'react';
import Posts from './posts';
import {addPostActionCreator, updateNewPostText} from '../../../redux/profile_reducer';



const postsContainer = (props) =>{
    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    debugger
    let onPostChange = (text) => {
        props.dispatch(updateNewPostText(text))
    }

    return(
        <Posts updateNewPostText={ onPostChange } addPost={ addPost } postsCollection={ props.state.profilePage.postsCollection } newPostText={ props.state.profilePage.newPostText } />
    )
}

export default postsContainer;