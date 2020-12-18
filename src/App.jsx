import React from "react";
import HeaderContainer from  '../src/components/Header/headerContainer';
import MessageWrapper from '../src/components/Message_Wrapper/message_wrapper';
import NavWrapper from '../src/components/Nav_Wrapper/nav_wrapper';
import ProfileContentContainer from './components/Posts_content/profile_contentContainer';
import MessagesContentContainer from '../src/components/Messages_Content/message_contentContainer';
import FriendsContentContainer from '../src/components/Friends_Content/friends_contentContainer';
import Login from '../src/components/Login/login';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="container">
                <HeaderContainer/>
                <NavWrapper/>
                <MessageWrapper/>
                <Route path="/messages_content" render={() => <MessagesContentContainer/>}/>

                <Route path="/profile/:userId?" render={() => <ProfileContentContainer/>}/>

                <Route path="/friends_content" render={() => <FriendsContentContainer/>}/>

                <Route path="/login" render={() => <Login/>}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
