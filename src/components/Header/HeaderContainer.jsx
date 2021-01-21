import React from 'react';
import Header from './Header';
import {connect} from "react-redux";
import {authLogout, userAuth} from "../../redux/auth_reducer";


class HeaderContainer extends React.Component{

/*    componentDidMount() {
            this.props.userAuth();
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
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        profile: state.profilePage.profile
    }
}


export default connect(mapStateToProps, {userAuth, authLogout})(HeaderContainer);