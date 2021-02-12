import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux";
import profile_reducer from "./profile_reducer";
import messages_reducer from "./messages_reducer";
import peoples_reducer from "./peoples_reducer";
import auth_reducer from "./auth_reducer";
import thunkMiddleWare, {ThunkAction} from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import app_reducer from "./app_reducer";

let rootReducer = combineReducers({
    profilePage: profile_reducer,
    messagesPage: messages_reducer,
    friendsPage: peoples_reducer,
    auth: auth_reducer,
    form: formReducer,
    app: app_reducer
});

type RootReducerType = typeof rootReducer // (globalstate: AppStateType) => AppStateType

export type AppStateType = ReturnType<RootReducerType>

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never

export type InferActionsType<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>

export type BaseThunkType <A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleWare)));

export default store;