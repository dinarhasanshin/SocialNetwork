import React from 'react';
import s from "./ProfilePosts.module.css";
import PostItem from "./PostItem/PostItem";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const ProfilePosts = (props) => {
    let postsElements = props.profilePage.postsCollection.map(p => <PostItem message={ p.message } username={ p.username }
                                                                             photos={ props.profilePage.profile.photos.large }/>)

    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <>
            {
                props.isOwner && <AddPostFormRedux onSubmit={ addNewPost } profile={ props.profilePage.profile }/>
            }
            <div className={s.posts_collection}>
                { postsElements }
            </div>
        </>
    );
};

let maxLength1000 = maxLengthCreator(1000);

const AddPostForm = (props) => {
    return(
        <form className={s.posts_input  + " " + s.profile_content_block} onSubmit={props.handleSubmit}>
            <div className={s.posts_input_left}>
                <img src={props.profile.photos.large} alt="" className={s.posts_img}/>
                <p />
                <Field component={ Input } className={s.posts_textarea} name={ "newPostText" } placeholder={"Enter your post"}
                       validate={ [required, maxLength1000] }/>
            </div>
            <div>
                <button className={s.posts_btn_send}>Send</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({
    form: 'postAdd'
})(AddPostForm)

export default ProfilePosts;