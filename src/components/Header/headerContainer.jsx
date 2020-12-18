import React from 'react';
import Header from './header';
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData, userAuth} from "../../redux/auth_reducer";
import {authAPI} from "../../api/api";


class headerContainer extends React.Component{

    componentDidMount() {
            this.props.userAuth();
    }
    render() {
        return (
            <Header {...this.props}/>
        );
    }

}

let mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}


export default connect(mapStateToProps, {userAuth})(headerContainer);