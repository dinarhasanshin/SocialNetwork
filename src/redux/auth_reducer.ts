import {ResultCodesEnum} from "../api/api";
import {FormAction, stopSubmit} from 'redux-form';
import {ProfileType} from "../types/types";
import {BaseThunkType} from "./redux-store";
import {InferActionsType} from './redux-store';
import {authAPI} from "../api/auth-api";
import {profileAPI} from "../api/profile-api";
import {securityAPI} from "../api/security-api";


let initialState = {
    id: null as (number | null),
    login: null as (string | null),
    email: null as (string | null),
    isAuth: false as boolean,
    captchaUrl: null as (string | null),
    authProfile: null as (ProfileType | null)
}

type InitialStateType = typeof initialState

const auth_reducer = (state = initialState, action: ActionTypes): InitialStateType => {

    switch (action.type) {

        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data,
            }
        case 'SET_AUTH_PROFILE':
            return {
                ...state,
                authProfile: action.profile,
            }
        case 'SET_CAPTCHA':
            return {
                ...state,
                captchaUrl: action.payload,
            }
        default:
            return state;

    }
}

type ActionTypes = InferActionsType< typeof actions>

export const actions = {
    setAuthUserData: (id: number | null, login: string | null, email: string | null, isAuth: boolean) =>
        ({type: 'SET_USER_DATA', data: {id, login, email, isAuth}} as const),
    setAuthProfile: (profile: ProfileType) =>
        ({type: 'SET_AUTH_PROFILE', profile} as const),
    setCaptchaUrl: (url: string | null) =>
        ({type: 'SET_CAPTCHA', payload: url} as const)
}




type ThunkActionTypes = BaseThunkType<ActionTypes | FormAction>


export const userAuth = (): ThunkActionTypes => async (dispatch) => {
    let data = await authAPI.getAuth();

    if (data.resultCode === ResultCodesEnum.Success) {
        let {id, login, email} = data.data;
        dispatch(actions.setAuthUserData(id, login, email, true));
    }
}

export const authLogin = (email: string, password: string, rememberMe: boolean, captcha?: string): ThunkActionTypes => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha)

    if (data.resultCode === 0){
        dispatch(userAuth())
    }
    else{
        if(data.resultCode === 10){
            dispatch(getCaptchaUrl())
        }
        let message = data.messages.length > 0 ? data.messages[0] : "Some error";

        dispatch(stopSubmit("login", {_error: message}));
    }

}
export const authLogout = (): ThunkActionTypes => async (dispatch) => {
    let data = await authAPI.logout();

    if (data.resultCode === 0){
        dispatch(actions.setAuthUserData(null, null, null, false));
        dispatch(actions.setCaptchaUrl(null));
    }
}

export const getCaptchaUrl = (): ThunkActionTypes => async (dispatch) => {
    let data = await securityAPI.getCaptchaUrl();
    if(data){
        dispatch(actions.setCaptchaUrl(data.url))
    }
        /*dispatch(actions.setCaptchaUrl(data.url));*/
}

export const setAuthUserProfile = (userId: number): ThunkActionTypes => async (dispatch) => {
    let data = await profileAPI.getProfile(userId);
    dispatch(actions.setAuthProfile(data));
}

export default auth_reducer;