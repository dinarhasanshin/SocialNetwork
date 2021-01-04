import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE = 'SET-PROFILE';
const SET_STATUS = 'SET-STATUS';


let initialState = {

    fullName: "Dinar Hasanshin",

    profile: null,

    dataPerson: [
        {id: 1, name: "Age", meaning: 18},
        {id: 2, name: "Gender", meaning: "Male"},
    ],
    dataLocation: [
        {id: 3, name: "City", meaning: "Samara"},
        {id: 4, name: "Country", meaning: "Russia"}
    ],
    dataSocial: [
        {id: 1, name: "Groups", meaning: 7},
        {id: 2, name: "Friends", meaning: 12},
    ],
    postsCollection: [
        {id: 1, message: 'This is my first post'},
        {id: 2, message: 'Great weather'},
        {id: 3, message: 'Beautiful street!'},
        {id: 4, message: 'My name is Dinar'},
        {id: 5, message: 'Hey, what is your health?'}
    ],
    newPostText: 'CubeFace is strong!',
    status: ""
}

const profile_reducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            let text = state.newPostText;
            return {
                ...state,
                newPostText: '',
                postsCollection: [...state.postsCollection, {id: 6, message: text}]
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_PROFILE:
            return {...state, profile: action.profile}

        case SET_STATUS:
            if(action.status === null){
                return {...state, status: "Write your status!"}

            }else{
                return {...state, status: action.status}
            }

        default:
            return state;
    }
}


export const addPost = () => ({type: ADD_POST})
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setProfile = (profile) => ({type: SET_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})


export const setUserProfile = (userId) => (dispatch) => {
        usersAPI.getProfile(userId).then(data => {
            dispatch(setProfile(data));
        });
    }


export const getUserStatus = (userId) => (dispatch) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(setStatus(data));
        });
    }


export const updateUserStatus = (status) => (dispatch) => {
        profileAPI.updateStatus(status).then(data => {
            if (data.resultCode === 0)
                dispatch(setStatus(status));
        });
    }


export default profile_reducer;