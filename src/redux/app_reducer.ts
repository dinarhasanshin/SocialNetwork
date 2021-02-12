import {userAuth} from "./auth_reducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionsType} from "./redux-store";


let initialState = {
    initialized: false
}

type InitialStateType = typeof initialState;

const AppReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type){
        case 'SET_INITIALIZED':
            return{
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

type ActionTypes = InferActionsType<typeof actions>

export const actions = {
    initializedSuccess: () => ({type: 'SET_INITIALIZED'} as const)
}

export const initializeApp = ():
    ThunkAction<void, AppStateType, unknown, ActionTypes> => (dispatch) => {
    let promise = dispatch(userAuth());


/*    Promise.all([promise]).then(() => {
        //Когда много промисов от диспатчей
        dispatch(initializedSuccess());
        dispatch(initializedSuccess());
        dispatch(initializedSuccess());
    })*/

    promise.then(() => {
        dispatch(actions.initializedSuccess());
    });
}


export default AppReducer;