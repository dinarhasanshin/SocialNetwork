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
                isAuth: true
            }
        default:
            return state;

    }
}

export const setAuthUserData = (id, login, email) => {
    return { type: SET_USER_DATA, data: { id, login, email } }
}

export default auth_reducer;