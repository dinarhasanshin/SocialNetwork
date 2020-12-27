import React from 'react';
import ProfileContent from './profile_content';
import {connect} from "react-redux";
import {setUserProfile} from '../../redux/profile_reducer';
import {withRouter} from 'react-router-dom';
import {compose} from "redux";

class ProfileContentContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = this.props.userId
        }
        this.props.setUserProfile(userId);
    }

    render() {
        return(
           <ProfileContent {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state) => {
    return{
        userId: state.auth.id,
        profilePage: state.profilePage,
        profile: state.profilePage.profile,
    }
}

export default compose(
    connect(mapStateToProps, { setUserProfile }),
    withRouter
)(ProfileContentContainer);