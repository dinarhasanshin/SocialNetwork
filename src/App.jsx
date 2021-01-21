import React from "react";
import HeaderContainer from './components/Header/HeaderContainer';
import Login from '../src/components/Login/login';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app_reducer";
import './App.css';
import ProfilePageContainer from "./components/ProfilePage/ProfilePageContainer";
import NavWrapper from "./components/NavWrapper/NavWrapper";
import PeoplesPageContainer from "./components/PeoplesPage/PeoplesPageContainer";


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if(!this.props.initialized){
            return <p>Loading...</p>
        }
        return (
            <BrowserRouter>
                <div className="container">
                    <HeaderContainer/>
                    <NavWrapper/>
                    <Route path="/peoples" render={() => <PeoplesPageContainer/>}/>

                    <Route path="/profile/:userId?" render={() => <ProfilePageContainer/>}/>

{/*                    <Route path="/friends_content" render={() => <FriendsContentContainer/>}/>*/}

                    <Route path="/login" render={() => <Login/>}/>
                </div>
            </BrowserRouter>
        );
    }
}

let mapStateToProps = (state) => {
    return{
        initialized: state.app.initialized
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))
    (App);
