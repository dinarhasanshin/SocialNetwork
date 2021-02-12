import {setAuthUserProfile} from "./auth_reducer";
import {ProfileType} from "../types/types";
import {BaseThunkType, InferActionsType} from "./redux-store";
import {profileAPI} from "../api/profile-api";
import {FormAction, stopSubmit} from "redux-form";



export type PostsCollectionType = {
    id: number,
    message: string | null,
    username: string
}


let initialState = {
    profile: null as (ProfileType | any),
    postsCollection: [] as (Array<PostsCollectionType> | any),
    status: "" as (string | null),
    isOwner: false as boolean,
    newPostText: '' as (string | null)
}

export type InitialStateType = typeof initialState

const profile_reducer = (state = initialState, action: ActionTypes): InitialStateType => {

    switch (action.type) {

        case 'ADD_POST':
            return {
                ...state,
                newPostText: '',
                //TODO: Сделать нормальную привязку имени к постам!!!
                postsCollection: [...state.postsCollection, {id: 6, message: action.newPostText, username: state.profile.fullName}]
            };
        case 'SET_PROFILE':
            return {...state, profile: action.profile}

        case 'SET_STATUS':
            if(action.status === null || action.status === ""){
                return {...state, status: "Write your status!"}

            }else{
                return {...state, status: action.status}
            }
        case 'SAVE_PHOTO_SUCCESS':
            return {...state, profile: {...state.profile, photos: action.photos}}

        case 'SET_IS_OWNER':
            return {...state, isOwner: action.isOwner}

        default:
            return state;
    }
}

type ActionTypes = InferActionsType<typeof actions>


export const actions = {
    addPost: (newPostText: string) => ({type: 'ADD_POST', newPostText} as const),
    setProfile: (profile: any) => ({type: 'SET_PROFILE', profile} as const),
    setStatus: (status: string) => ({type: 'SET_STATUS', status} as const),
    setIsOwner: (isOwner: boolean) => ({type: 'SET_IS_OWNER', isOwner} as const),
    savePhotoSuccess: (photos: any) => ({type: 'SAVE_PHOTO_SUCCESS', photos} as const)
}


type ThunkActionTypes = BaseThunkType<ActionTypes | FormAction>

export const addPostProfile = (newPostText: string): ThunkActionTypes => async (dispatch) => {
    debugger
    if(newPostText === undefined){

        dispatch(stopSubmit('postAdd', { error: "Input can't be empty" }))
    }else{
        dispatch(actions.addPost(newPostText))
    }

}

export const setUserProfile = (userId: number): ThunkActionTypes => async (dispatch) => {
    let data = await profileAPI.getProfile(userId);

    dispatch(actions.setProfile(data));
}


export const getUserStatus = (userId: number): ThunkActionTypes => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)

    dispatch(actions.setStatus(data));
}


export const updateUserStatus = (status: string): ThunkActionTypes => async (dispatch) => {
    let data = await profileAPI.updateStatus(status);

    if (data.resultCode === 0)
        dispatch(actions.setStatus(status));

}

export const savePhoto = (file: File): ThunkActionTypes => async (dispatch, getState) => {
    const userId = getState().auth.id;
    let data = await profileAPI.savePhoto(file)

    if (data.resultCode === 0){
        dispatch(actions.savePhotoSuccess(data.data.photos));
        if (userId !== null) {
            await dispatch(setAuthUserProfile(userId));
        }else{
            throw new Error("userId can't be null")
        }
    }
}

export const saveProfile = (profile: ProfileType): ThunkActionTypes => async (dispatch, getState) => {
    const userId = getState().auth.id;
    let data = await profileAPI.saveProfile(profile)

    if (data.resultCode === 0){
        if (userId !== null) {
            await dispatch(setUserProfile(userId));
            await dispatch(setAuthUserProfile(userId));
        }else{
            throw new Error("userId can't be null")
        }
        //TODO: Релизовать нормальную передачу данных в Header компоненту
    }
}


export default profile_reducer;