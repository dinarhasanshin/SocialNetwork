import React from 'react';
import ProfileContent from './profile_content';
import {connect} from "react-redux";
import {getUserStatus, setUserProfile, updateUserStatus} from '../../redux/profile_reducer';
import {withRouter} from 'react-router-dom';
import {compose} from "redux";

class ProfileContentContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = this.props.userId
        }
        this.props.setUserProfile(userId);

        this.props.getUserStatus(userId);
    }

    render() {
        return(
           <ProfileContent { ...this.props } profile={ this.props.profile }
                           status={ this.props.status } updateUserStatus={ this.props.updateUserStatus } />
        );
    }
}

let mapStateToProps = (state) => {
    return{
        userId: state.auth.id,
        profilePage: state.profilePage,
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose(
    connect(mapStateToProps, { setUserProfile, getUserStatus, updateUserStatus }),
    withRouter
)(ProfileContentContainer);