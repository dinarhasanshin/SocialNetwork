import {profileAPI, usersAPI} from "../api/api";
import user from "@iconify-icons/uil/user";

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET-PROFILE';
const SET_STATUS = 'SET-STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';
const SAVE_PROFILE_SUCCESS = 'SAVE-PROFILE-SUCCESS';


let initialState = {

    fullName: "Dinar Hasanshin",

    profile: null,

    dataContacts: [
        {id: 1, type: "GitHub" , value: "\"http://www.youtube.com/staryi_channel_84\""},
        {id: 2, type: "Vk" , value: "\"http://www.youtube.com/staryi_channel_84\""},
        {id: 3, type: "Facebook" , value: "\"http://www.youtube.com/staryi_channel_84\""},
        {id: 4, type: "Instagram" , value: "\"http://www.youtube.com/staryi_channel_84\""},
        {id: 5, type: "Twitter" , value: "\"http://www.youtube.com/staryi_channel_84\""},
        {id: 6, type: "YouTube" , value: "\"http://www.youtube.com/staryi_channel_84\""},
        {id: 6, type: "WebSite" , value: "\"http://www.youtube.com/staryi_channel_84\""},
    ],

    postsCollection: [
    ],
    status: ""
}

const profile_reducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                //TODO: Сделать нормальную привязку имени к постам!!!
                postsCollection: [...state.postsCollection, {id: 6, message: action.newPostText, username: state.profile.fullName}]
            };
        case SET_PROFILE:
            return {...state, profile: action.profile}

        case SET_STATUS:
            if(action.status === null || action.status === ""){
                return {...state, status: "Write your status!"}

            }else{
                return {...state, status: action.status}
            }
        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos}}

/*        case SAVE_PROFILE_SUCCESS:
            return {...state, profile: action.profile}*/

        default:
            return state;
    }
}


export const addPost = (newPostText) => ({type: ADD_POST, newPostText})
export const setProfile = (profile) => ({type: SET_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})
export const saveProfileSuccess = (profile) => ({type: SAVE_PROFILE_SUCCESS, profile})


export const setUserProfile = (userId) => async (dispatch) => {
    let data = await usersAPI.getProfile(userId);

    dispatch(setProfile(data));

}


export const getUserStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)

    dispatch(setStatus(data));
}


export const updateUserStatus = (status) => async (dispatch) => {
    let data = await profileAPI.updateStatus(status);

    if (data.resultCode === 0)
        dispatch(setStatus(status));

}

export const savePhoto = (file) => async (dispatch) => {
    let data = await profileAPI.savePhoto(file)
    if (data.resultCode === 0){
        dispatch(savePhotoSuccess(data.data.photos));
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.id;
    let data = await profileAPI.saveProfile(profile)

    if (data.resultCode === 0){
        dispatch(setUserProfile(userId));
    }
}


export default profile_reducer;