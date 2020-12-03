import React from 'react';
import Posts from './posts';
import {addPostActionCreator, updateNewPostText} from '../../../redux/profile_reducer';



const postsContainer = (props) =>{
    debugger;
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostText(text))
    }

    return(
        <Posts updateNewPostText={ onPostChange } addPost={ addPost } postsCollection={ state.profilePage.postsCollection } newPostText={ state.profilePage.newPostText } />
    )
}

export default postsContainer;