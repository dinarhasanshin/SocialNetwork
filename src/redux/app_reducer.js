import {userAuth} from "./auth_reducer";


const SET_INITIALIZED = 'SET-INITIALIZED';


let initialState = {
    initialized: false
}

const AppReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_INITIALIZED:
            return{
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: SET_INITIALIZED});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(userAuth());


/*    Promise.all([promise]).then(() => {
        //Когда много промисов от диспатчей
        dispatch(initializedSuccess());
        dispatch(initializedSuccess());
        dispatch(initializedSuccess());
    })*/

    promise.then(() => {
        dispatch(initializedSuccess());
    });
}


export default AppReducer;