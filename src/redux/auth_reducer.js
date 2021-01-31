import {authAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = 'SET-USER-DATA';
const SET_AUTH_PROFILE = 'SET-AUTH-PROFILE';


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    authProfile: null
}


const auth_reducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        case SET_AUTH_PROFILE:
            return {
                ...state,
                authProfile: action.profile

            }
        default:
            return state;

    }
}


export const setAuthUserData = (id, login, email, isAuth) => ({type: SET_USER_DATA, data: { id, login, email, isAuth }})
export const setAuthProfile = (profile) => ({type: SET_AUTH_PROFILE, profile})


export const userAuth = () => async (dispatch) => {
    let data = await authAPI.getAuth();

    if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setAuthUserData(id, login, email, true));
    }
}

export const authLogin = (email, password, rememberMe) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe)

    if (data.resultCode === 0){
        dispatch(userAuth())
    } else{
        let message = data.messages.length > 0 ? data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
    }

}
export const authLogout = (email, password, rememberMe) => async (dispatch) => {
    let data = await authAPI.logout();

    if (data.resultCode === 0){
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export const setAuthUserProfile = (userId) => async (dispatch) => {
    let data = await usersAPI.getProfile(userId);
    dispatch(setAuthProfile(data));
}

export default auth_reducer;