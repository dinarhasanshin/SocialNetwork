import {combineReducers, createStore} from "redux";
import profile_reducer from "./profile_reducer";
import dialogs_reducer from "./dialogs_reducer";
import friends_reducer from "./friends_reducer";
import auth_reducer from "./auth_reducer";

let reducers = combineReducers({
    profilePage: profile_reducer,
    messagesPage: dialogs_reducer,
    friendsPage: friends_reducer,
    auth: auth_reducer
});


let store = createStore(reducers);


export default store;