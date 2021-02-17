import React from 'react';
import Header from './Header';
import {connect} from "react-redux";
import {authLogout, setAuthUserProfile, userAuth} from "../../redux/auth_reducer";
import {RouterProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType} from "../../types/types";
import {InitialStateType} from "../../redux/profile_reducer";


type MapStatePropsType = {
    id: number | null,
    isAuth: boolean,
    login: string | null,
    profile: ProfileType | null,
    profilePage: InitialStateType
}

type MapDispatchPropsType = {
    userAuth: () => void,
    authLogout: () => void,
    setAuthUserProfile: (userId: number) => void
}

type OwnPropsType = {

}

type PropsType = MapStatePropsType & MapDispatchPropsType & RouterProps

class HeaderContainer extends React.Component<PropsType>{

    componentDidMount() {
        if(this.props.id) {
            this.props.setAuthUserProfile(this.props.id);
        }
    }

    state = {
        logOutMenu: false,
    };

    toggleLogOutMenu = () => {
        this.setState({
            logOutMenu: !this.state.logOutMenu
        })
    };
    authLogOutRedirect = () => {
        this.props.authLogout();
        if(this.props.isAuth){
            this.props.history.push("/peoples");
        }
    }

    render() {
        return (
            <Header {...this.props} authLogOutRedirect={ this.authLogOutRedirect } toggleLogOutMenu={ this.toggleLogOutMenu } logOutMenu={ this.state.logOutMenu }/>
        );
    }

}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return{
        id: state.auth.id,
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        profile: state.auth.authProfile,
        profilePage: state.profilePage.profile
    }
}



export default compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps,
        {userAuth, authLogout, setAuthUserProfile}),
    withRouter,
)(HeaderContainer);