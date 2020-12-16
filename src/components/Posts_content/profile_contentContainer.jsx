import React from 'react';
import ProfileContent from './profile_content';
import {connect} from "react-redux";
import {setProfile} from '../../redux/profile_reducer';
import * as axios from "axios";
import {withRouter} from 'react-router-dom';

class ProfileContentContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = this.props.userId
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setProfile(response.data);
            });
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
        profile: state.profilePage.profile
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContentContainer);

export default connect(mapStateToProps,
    {setProfile})(WithUrlDataContainerComponent);