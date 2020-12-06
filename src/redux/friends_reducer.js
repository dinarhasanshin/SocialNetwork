const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';


/*let initialState = {

    UsersCollection: [],
    Tabs: [
        {AllUsers: 'AllUsers'},
        {Friends: 'Friends'}
    ],
    ActiveTad: 'AllUsers'

}*/
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
        ]
}


const friends_reducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                friendsCollection: state.friendsCollection.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                friendsCollection: state.friendsCollection.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            debugger;
            return {...state, friendsCollection: [...state.friendsCollection, ...action.users]}

        default:
            return state;
    }
}


export const followAC = (userId) => ({type: FOLLOW, userId})

export const unFollowAC = (userId) => ({type: UNFOLLOW, userId})

export const setUsersAC = (users) => ({type: SET_USERS, users})


export default friends_reducer;