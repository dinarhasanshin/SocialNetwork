import React from 'react';
import {connect} from "react-redux";
import {
    actions,
    getUserStatus, InitialStateType,
    savePhoto,
    saveProfile,
    setUserProfile,
    updateUserStatus
} from '../../redux/profile_reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from "redux";
import ProfilePage from "./ProfilePage";
import {setAuthUserProfile} from "../../redux/auth_reducer";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType} from "../../types/types";
import PreLoader from "../common/PreLoader/PreLoader";

type MapStatePropsType = {
    userId: number | null,
    profilePage: InitialStateType
    profile: ProfileType,
    status: string | null,
    isOwner: boolean,

}

type MapDispatchPropsType = {
    setUserProfile: (userId: number) => void,
    getUserStatus: (userId: number) => void,
    updateUserStatus: (status: string) => void,
    savePhoto: (file: File) => void,
    saveProfile: (profile: ProfileType) => void,
    setIsOwner: (isOwner: boolean) => void,
    setAuthUserProfile: (userId: number) => void
}

type OwnPropsType = {
    
}

type PathParams = {
    userId: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<PathParams>

class ProfilePageContainer extends React.Component<PropsType> {

    refreshProfile() {
        this.props.setIsOwner(!this.props.match.params.userId);
        let userId: number | null = +this.props.match.params.userId
        if(!userId) {
            userId = this.props.userId
            if (!userId){
                this.props.history.push("/login");
            }
        }
        if(userId) {
            this.props.setUserProfile(userId);
            this.props.getUserStatus(userId);
        }
    }

    componentDidMount() {
        this.refreshProfile();
    }
    componentDidUpdate(prevProps: PropsType, prevState: AppStateType) {
        if (this.props.match.params.userId !== prevProps.match.params.userId){
            this.refreshProfile();
        }
    }

    render() {
        if (this.props.profile === null){
            return /*<div>loading...</div>*/ <PreLoader/>
        }
        return(
            <ProfilePage { ...this.props } profile={ this.props.profile } status={ this.props.status }
                         updateUserStatus={ this.props.updateUserStatus }
                         savePhoto={ this.props.savePhoto }/>
        );
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return{
        userId: state.auth.id,
        profilePage: state.profilePage,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isOwner: state.profilePage.isOwner
    }
}

export default compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType >(mapStateToProps, { setUserProfile, getUserStatus, updateUserStatus, savePhoto,
        saveProfile, setIsOwner: actions.setIsOwner, setAuthUserProfile }),
    withRouter,
)(ProfilePageContainer);