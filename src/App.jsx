import React from "react";
import Header from  '../src/components/Header/header';
import MessageWrapper from '../src/components/Message_Wrapper/message_wrapper';
import NavWrapper from '../src/components/Nav_Wrapper/nav_wrapper';
import PostsContent from '../src/components/Posts_content/posts_content';
import MessagesContentContainer from '../src/components/Messages_Content/message_contentContainer';
import FriendsContent from '../src/components/Friends_Content/friends_content';

import './App.css';
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header/>
                <NavWrapper/>
                <MessageWrapper/>
                <Route path="/messages_content" render={() => <MessagesContentContainer/>}/>

                <Route path="/posts_content" render={() => <PostsContent store={ props.store }/>}/>

                <Route path="/friends_content" render={() => <FriendsContent/>}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
