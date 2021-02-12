import { FriendsCollectionType } from "../types/types";
import {updateObjectInArray} from "../utils/object-helpers";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppStateType, BaseThunkType, InferActionsType} from "./redux-store";
import {usersAPI} from "../api/users-api";


let initialState = {
    friendsCollection: [] as Array<FriendsCollectionType>,
    pageSize: 10 as number,
    totalUserCount: 0 as number,
    currentPage: 1 as number,
    isFetching: true as boolean,
    isFollowing: [] as Array<number>
}

type InitialState = typeof initialState

const peoples_reducer = (state = initialState, action: ActionTypes) : InitialState => {

    switch (action.type) {

        case 'FOLLOW':
            return {
                ...state,
                friendsCollection: updateObjectInArray(state.friendsCollection,
                    action.userId, "id", {followed: true})
            }
        case 'UNFOLLOW':
            return {
                ...state,
                friendsCollection: updateObjectInArray(state.friendsCollection,
                    action.userId, "id", {followed: false})
            }
        case 'SET_USERS':
            return {...state, friendsCollection: action.users}
        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET_TOTAL_COUNT':
            return {...state, totalUserCount: action.totalUsersCount}
        case 'TOGGLE_IS_FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'TOGGLE_IS_FOLLOWING':
            return {
                ...state,
                isFollowing: action.isFetching
                    ? [...state.isFollowing, action.userId]
                    : state.isFollowing.filter(id => id !== action.userId)
            }

        default:
            return state;
    }
}

type ActionTypes = InferActionsType<typeof actions>


export const actions = {
    follow: (userId: number) => ({type: 'FOLLOW', userId} as const),
    unFollow: (userId: number) => ({type: 'UNFOLLOW', userId} as const),
    setUsers: (users: Array<FriendsCollectionType>) => ({type: 'SET_USERS', users} as const),
    setCurrentPage: (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const),
    setTotalUsersCount: (totalUsersCount: number) => ({type: 'SET_TOTAL_COUNT', totalUsersCount} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching} as const),
    toggleIsFollowing:(isFetching: boolean, userId: number) => ({type: 'TOGGLE_IS_FOLLOWING', isFetching, userId} as const)
}

type ThunkActionTypes = BaseThunkType<ActionTypes>



export const getUsers = (currentPage: number, pageSize: number): ThunkActionTypes => async (dispatch) => {

    dispatch(actions.setCurrentPage(currentPage));
    dispatch(actions.toggleIsFetching(true));

    let data = await usersAPI.getUsers(currentPage, pageSize);

    dispatch(actions.toggleIsFetching(false));
    dispatch(actions.setUsers(data.items));
    /*dispatch(setTotalUsersCount(data.totalCount));*/
    dispatch(actions.setTotalUsersCount(400));
}

const userFollowUnFollowFlow = async (dispatch: Dispatch<ActionTypes>, userId: number,
                                      apiMethod: any, actionCreator: (userId: number) => ActionTypes) => {

    dispatch(actions.toggleIsFollowing(true, userId));

    let data = await apiMethod(userId);

    if (data.resultCode === 0) {
        dispatch(actions.toggleIsFollowing(false, userId));
        dispatch(actionCreator(userId));
    }

}

export const userFollow = (userId: number): ThunkActionTypes => async (dispatch) => {
    await userFollowUnFollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.follow);
}

export const userUnFollow = (userId: number): ThunkActionTypes => async (dispatch)=> {
    await userFollowUnFollowFlow(dispatch, userId, usersAPI.unFollow.bind(usersAPI), actions.unFollow);
}


export default peoples_reducer;