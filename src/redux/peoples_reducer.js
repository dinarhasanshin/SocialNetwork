import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING = 'TOGGLE-IS-FOLLOWING';


let initialState = {
    friendsCollection:
        [
            /*            {
                            name: "YEVHEN01",
                            id: 13121,
                            uniqueUrlName: null,
                            photos: {small: null, large: null},
                            status: null,
                            followed: false
                        }*/
        ],
    pageSize: 10,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
    isFollowing: []
}


const peoples_reducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                friendsCollection: updateObjectInArray(state.friendsCollection, action.userId, "id", {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                friendsCollection: updateObjectInArray(state.friendsCollection, action.userId, "id", {followed: false})
            }
        case SET_USERS:
            return {...state, friendsCollection: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_COUNT:
            return {...state, totalUserCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING:
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


export const follow = (userId) => ({type: FOLLOW, userId})

export const unFollow = (userId) => ({type: UNFOLLOW, userId})

export const setUsers = (users) => ({type: SET_USERS, users})

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})

export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_COUNT, totalUsersCount})

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const toggleIsFollowing = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING, isFetching, userId})

export const getUsers = (currentPage, pageSize) => async (dispatch) => {

    dispatch(setCurrentPage(currentPage));
    dispatch(toggleIsFetching(true));

    let data = await usersAPI.getUsers(currentPage, pageSize);

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    /*dispatch(setTotalUsersCount(data.totalCount));*/
    dispatch(setTotalUsersCount(400));
}

const userFollowUnFollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {

    dispatch(toggleIsFollowing(true, userId));

    let data = await apiMethod(userId);

    if (data.resultCode === 0) {
        dispatch(toggleIsFollowing(false, userId));
        dispatch(actionCreator(userId));
    }

}

export const userFollow = (userId) => async (dispatch) => {
    await userFollowUnFollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), follow);
}

export const userUnFollow = (userId) => async (dispatch) => {
    await userFollowUnFollowFlow(dispatch, userId, usersAPI.unFollow.bind(usersAPI), unFollow);
}


export default peoples_reducer;