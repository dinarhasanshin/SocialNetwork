const ADD_MESSAGE = 'ADD-MESSAGE';


let initialState = {

    dialogs_data: [
        {id: 1, name: "Anastasiya"},
        {id: 2, name: "Dinar"},
        {id: 3, name: "Egor"},
        {id: 4, name: "Artur"}
    ],
    messages_data: [
        {id: 1, message: "Hello!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Iam okay! And you?"},
        {id: 4, message: "And I."}
    ],

}

const dialogs_reducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_MESSAGE:
            return {
                ...state,
                newMessageText: '',
                messages_data: [...state.messages_data, {id: 6, message: action.newMessageText}]
            };
        default:
            return state;

    }
}

export const addMessage = (newMessageText) => {
    return { type: ADD_MESSAGE, newMessageText }
}

export default dialogs_reducer;