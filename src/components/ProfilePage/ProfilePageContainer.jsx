import React from 'react';
import {connect} from "react-redux";
import {
    getUserStatus,
    savePhoto,
    saveProfile,
    setIsOwner,
    setUserProfile,
    updateUserStatus
} from '../../redux/profile_reducer';
import {withRouter} from 'react-router-dom';
import {compose} from "redux";
import ProfilePage from "./ProfilePage";

class ProfilePageContainer extends React.Component {

    refreshProfile() {
        this.props.setIsOwner(!this.props.match.params.userId);
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = this.props.userId
            if (!userId){
                this.props.history.push("/login");
            }
        }
        this.props.setUserProfile(userId);

        this.props.getUserStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId){
            this.refreshProfile();
        }
    }

    render() {
        if (this.props.profile === null){
            return <div>loading...</div>
        }
        return(
            <ProfilePage { ...this.props } profile={ this.props.profile } status={ this.props.status }
                         updateUserStatus={ this.props.updateUserStatus }
                         savePhoto={ this.props.savePhoto }/>
        );
    }
}

let mapStateToProps = (state) => {
    return{
        userId: state.auth.id,
        profilePage: state.profilePage,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isOwner: state.profilePage.isOwner
    }
}

export default compose(
    connect(mapStateToProps, { setUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile, setIsOwner }),
    withRouter
)(ProfilePageContainer);