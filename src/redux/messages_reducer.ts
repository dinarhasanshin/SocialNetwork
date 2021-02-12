const ADD_MESSAGE = 'ADD-MESSAGE';


type DialogsType = {
    id: number,
    name: string
}

type MessagesType = {
    id: number,
    message: string
}

let initialState = {

    dialogs_data: [
        {id: 1, name: "Anastasiya"},
        {id: 2, name: "Dinar"},
        {id: 3, name: "Egor"},
        {id: 4, name: "Artur"}
    ] as Array<DialogsType>,
    messages_data: [
        {id: 1, message: "Hello!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Iam okay! And you?"},
        {id: 4, message: "And I."}
    ] as Array<MessagesType>,
}

type InitialState = typeof initialState

const messages_reducer = (state = initialState, action: any): InitialState => {

    switch (action.type) {

        case ADD_MESSAGE:
            return {
                ...state,
                //TODO: Сделать зануление поля ввода после отправки сообщения!
                messages_data: [...state.messages_data, {id: 6, message: action.newMessageText}]
            };
        default:
            return state;

    }
}

type addMessageType = {
    type: typeof ADD_MESSAGE,
    newMessageText: string
}

export const addMessage = (newMessageText: string): addMessageType => ({ type: ADD_MESSAGE, newMessageText })

export default messages_reducer;