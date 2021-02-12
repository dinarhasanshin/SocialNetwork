import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";


let mapStateToPropsForRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

type MapPropsType = {
    isAuth: boolean
}
type DispatchPropsType = {
    fake: () => void
}

function withAuthRedirect<WCP> (WrappedComponent: React.ComponentType<WCP>) {

    const RedirectComponent: React.FC<MapPropsType & DispatchPropsType> = (props) => {

        let {isAuth, fake, ...restProps} = props

        if (!isAuth) return <Redirect to="/login"/>

        return <WrappedComponent {...restProps as WCP}/>
    }


    return connect(mapStateToPropsForRedirect)(RedirectComponent);
}

export default withAuthRedirect;