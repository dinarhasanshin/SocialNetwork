import React from "react";
import Header from  '../src/components/Header/header';
import MessageWrapper from '../src/components/Message_Wrapper/message_wrapper';
import NavWrapper from '../src/components/Nav_Wrapper/nav_wrapper';
import PostsContent from '../src/components/Posts_content/posts_content';
import MessagesContentContainer from '../src/components/Messages_Content/message_contentContainer';
import FriendsContentContainer from '../src/components/Friends_Content/friends_contentContainer';

import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import store from "./redux/redux-store";


const App = (props) => {
    window.store = props.store.getState();
    return (
        <BrowserRouter>
            <div className="container">
                <Header/>
                <NavWrapper/>
                <MessageWrapper/>
                <Route path="/messages_content" render={() => <MessagesContentContainer/>}/>

                <Route path="/posts_content" render={() => <PostsContent store={ props.store }/>}/>

                <Route path="/friends_content" render={() => <FriendsContentContainer/>}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
