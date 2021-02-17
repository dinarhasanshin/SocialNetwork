import React, {Suspense} from "react";
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/login';
import {HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app_reducer";
import './App.css';
import NavWrapper from "./components/NavWrapper/NavWrapper";
import {AppStateType} from "./redux/redux-store";
import {PreLoaderApp} from "./components/common/PreLoader/PreLoader";
import PreLoader from "./components/common/PreLoader/PreLoader";

const PeoplesPageContainer = React.lazy(() => import('./components/PeoplesPage/PeoplesPageContainer'));
const ProfilePageContainer = React.lazy(() => import('./components/ProfilePage/ProfilePageContainer'));


type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropType = {
    initializeApp: () => void
}

class App extends React.Component<MapPropsType & DispatchPropType> {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if(!this.props.initialized){
            return <PreLoaderApp/>
        }
        return (
            <HashRouter>
                <div className="container">
                    <HeaderContainer/>
                    <NavWrapper/>
                    <Switch>
                        <Route exact path="/"
                               render={() => {
                                   return <Redirect to="/profile"/>
                               }}/>
                        <Route path="/peoples"
                               render={() => {
                                   return <Suspense fallback={<PreLoader/>}><PeoplesPageContainer/></Suspense>
                               }}/>

                        <Route path="/profile/:userId?"
                               render={() => {
                                   return <Suspense fallback={<PreLoader/>}><ProfilePageContainer/></Suspense>
                               }}/>

                        {/*                    <Route path="/friends_content" render={() => <FriendsContentContainer/>}/>*/}

                        <Route path="/login" render={() => <Login/>}/>
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}

let mapStateToProps = (state: AppStateType) => {
    return{
        initialized: state.app.initialized
    }
}

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))
    (App);
