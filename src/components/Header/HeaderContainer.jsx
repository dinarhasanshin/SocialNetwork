import React from 'react';
import Header from './Header';
import {connect} from "react-redux";
import {authLogout, setAuthUserProfile, userAuth} from "../../redux/auth_reducer";


class HeaderContainer extends React.Component{

    componentDidMount() {
        this.props.setAuthUserProfile(this.props.id);
    }
/*    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.profile !== this.props.profilePage){
            return this.props.setAuthUserProfile(this.props.id);
        }
    }*/

    state = {
        logOutMenu: false,
    };

    toggleLogOutMenu = () => {
        this.setState({
            logOutMenu: !this.state.logOutMenu
        })
    };

    render() {
        return (
            <Header {...this.props} toggleLogOutMenu={ this.toggleLogOutMenu } logOutMenu={ this.state.logOutMenu }/>
        );
    }

}

let mapStateToProps = (state) => {
    return{
        id: state.auth.id,
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        profile: state.auth.authProfile,
        profilePage: state.profilePage.profile
    }
}


export default connect(mapStateToProps, {userAuth, authLogout, setAuthUserProfile})(HeaderContainer);