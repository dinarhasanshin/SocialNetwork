import React, { Suspense } from "react";
import HeaderContainer from './components/Header/HeaderContainer';
import Login from '../src/components/Login/login';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app_reducer";
import './App.css';
/*import ProfilePageContainer from "./components/ProfilePage/ProfilePageContainer";*/
import NavWrapper from "./components/NavWrapper/NavWrapper";
/*import PeoplesPageContainer from "./components/PeoplesPage/PeoplesPageContainer";*/

const PeoplesPageContainer = React.lazy(() => import('./components/PeoplesPage/PeoplesPageContainer'));
const ProfilePageContainer = React.lazy(() => import('./components/ProfilePage/ProfilePageContainer'));

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
                    <Route path="/peoples"
                           render={() =>
                           { return <Suspense fallback={ <div>Loading....</div> }><PeoplesPageContainer/></Suspense> }}/>

                    <Route path="/profile/:userId?"
                           render={() =>
                           { return <Suspense fallback={ <div>Loading....</div> }> <ProfilePageContainer/></Suspense>}}/>

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
