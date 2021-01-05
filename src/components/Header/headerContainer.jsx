import React from 'react';
import Header from './header';
import {connect} from "react-redux";
import {authLogout, userAuth} from "../../redux/auth_reducer";


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


export default connect(mapStateToProps, {userAuth, authLogout})(headerContainer);