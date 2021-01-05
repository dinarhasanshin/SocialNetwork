import React from 'react';
import Post from './Post/post';
import s from './posts.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Input} from "../../common/FormsControl";




const posts = (props) =>{

    let state = props.profilePage;

    let postsElements = state.postsCollection.map(p => <Post message={p.message}/>)


    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    }

    return(
        <div className={ s.content_posts }>
            <AddPostFormRedux onSubmit={ addNewPost }/>
            <div className={ s.posts_collection }>
                { postsElements }
            </div>
        </div>
    )
}
let maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
    return(
        <form className={ s.posts_add } onSubmit={ props.handleSubmit }>
            <div className={ s.posts_input }>
                <Field component={ Input } name={ "newPostText" }
                       placeholder={ "Write your post!" } validate={ [required, maxLength10] }/>
            </div>
            <div className={ s.posts_actions }>
                <button>Send</button>
                <button>Cancel</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({
    form: 'postAdd'
})(AddPostForm)


export default posts;