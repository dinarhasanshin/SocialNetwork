const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


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
    newMessageText: 'Hello my friend!'

}

const dialogs_reducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageText
            };
            state.messages_data.push(newMessage);
            state.newMessageText = '';
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;

        default:
            return state;

    }
}

export const addMessageActionCreator = () => {
    return {type: ADD_MESSAGE}
}
export const updateNewMessageText = (text) => {
    return { type: UPDATE_NEW_MESSAGE_TEXT, newText: text }
}

export default dialogs_reducer;