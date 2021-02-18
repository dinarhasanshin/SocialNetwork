import React from 'react';
// @ts-ignore
import s from "./ProfilePosts.module.css";
import PostItem from "./PostItem/PostItem";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControl/FormsControl";
import {InitialStateType} from "../../../redux/profile_reducer";
import {ProfileType} from "../../../types/types";
// @ts-ignore
import userPhoto from "../../../assets/images/defaulIconProfile.png";

export type MapStatePropsType = {
    profilePage: InitialStateType,
    isOwner: boolean

}
export type MapDispatchPropsType = {
    addPostProfile: (newPostText: string) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

const ProfilePosts: React.FC<PropsType> = (props) => {
    let postsElements = props.profilePage.postsCollection.map(
        (p: { message: string; username: string; }) => <PostItem message={ p.message } username={ p.username }
                                                                             photos={ props.profilePage.profile.photos.large }/>)

    let addNewPost = (values: ProfilePostsFormValuesType) => {
        props.addPostProfile(values.newPostText);
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

type ProfilePostsFormValuesType = {
    newPostText: string
}

type ProfilePostsFormOwnProps = {
    profile: ProfileType
}

const AddPostForm: React.FC<InjectedFormProps<ProfilePostsFormValuesType, ProfilePostsFormOwnProps> & ProfilePostsFormOwnProps> =
    ({handleSubmit, error, ...props}) => {
    return(
        <form className={s.posts_input  + " " + s.content_block_size} onSubmit={ handleSubmit }>
            <div className={s.posts_input_left}>
                {
                    props.profile.photos.large
                    ?<img src={props.profile.photos.large} alt="" className={s.posts_img}/>
                    :<img src={userPhoto} alt="" className={s.posts_img}/>
                }
                <p />
                <Field component={ Input } className={s.posts_textarea} name={ "newPostText" } placeholder={"Enter your post"}/>
                {
                    error !== null && <div>{ error }</div>
                }
            </div>
            <div>
                <button className={s.posts_btn_send}>Send</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm<ProfilePostsFormValuesType, ProfilePostsFormOwnProps>({
    form: 'postAdd'
})(AddPostForm)

export default ProfilePosts;