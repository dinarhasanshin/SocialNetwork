import React from 'react'
import {actions, addPostProfile, InitialStateType} from '../../../redux/profile_reducer';
import { connect } from "react-redux";
import ProfilePosts from "./ProfilePosts";
import {AppStateType} from "../../../redux/redux-store";

type MapStatePropsType = {
    profilePage: InitialStateType,
    isOwner: boolean
}

type MapDispatchPropsType = {
    addPostProfile: (newPostText: string) => void
}
/*type PropsType = MapStatePropsType & MapDispatchPropsType

type OwnPropsType = {

}*/


let mapStateToProps = (state: AppStateType) => {
    return{
        profilePage: state.profilePage,
        isOwner: state.profilePage.isOwner
    } as MapStatePropsType
}

const ProfilePostsContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>
(mapStateToProps, { addPostProfile })(ProfilePosts)

export default ProfilePostsContainer;