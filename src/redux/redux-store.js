import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profile_reducer from "./profile_reducer";
import messages_reducer from "./messages_reducer";
import peoples_reducer from "./peoples_reducer";
import auth_reducer from "./auth_reducer";
import thunkMiddleWare from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import app_reducer from "./app_reducer";

let reducers = combineReducers({
    profilePage: profile_reducer,
    messagesPage: messages_reducer,
    friendsPage: peoples_reducer,
    auth: auth_reducer,
    form: formReducer,
    app: app_reducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));

export default store;