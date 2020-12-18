import React from 'react';
import ProfileContent from './profile_content';
import {connect} from "react-redux";
import {setUserProfile} from '../../redux/profile_reducer';
import {Redirect, withRouter} from 'react-router-dom';

class ProfileContentContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = this.props.userId
        }
        this.props.setUserProfile(userId);
    }

    render() {

        if (!this.props.isAuth) {
            return <Redirect to={"/login"}/>
        }

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
        isAuth: state.auth.isAuth
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContentContainer);

export default connect(mapStateToProps,
    {setUserProfile})(WithUrlDataContainerComponent);