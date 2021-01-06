import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA';


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

const auth_reducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state;

    }
}

export const setAuthUserData = (id, login, email, isAuth) => {
    return { type: SET_USER_DATA, data: { id, login, email, isAuth } }
}

export const userAuth = () => (dispatch) => {
    return authAPI.getAuth().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setAuthUserData(id, login, email, true));
            }
        });

    }

export const authLogin = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(data => {
            if (data.resultCode === 0){
                dispatch(userAuth())
            } else{
                let message = data.messages.length > 0 ? data.messages[0] : "Some error";
                dispatch(stopSubmit("login", {_error: message}));
            }
        });
    }
}
export const authLogout = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.logout().then(data => {
            if (data.resultCode === 0){
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
    }
}

export default auth_reducer;