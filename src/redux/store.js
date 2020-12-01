import profile_reducer from "./profile_reducer";
import dialogs_reducer from "./dialogs_reducer";

let store = {
    _state: {
        messagesPage: {
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
        },
        profilePage: {
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
            newPostText: 'CubeFace is strong!'
        }



    },
    _callSubscriber() {
        console.log("No subscribers!")
    },
    _addPost () {
        let newPost = {
            id: 6,
            message: this._state.profilePage.newPostText
        };
        this._state.profilePage.postsCollection.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    _updateNewPostText(newText){
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    dispatch(action){

        this._state.profilePage = profile_reducer(this._state.profilePage, action);
        this._state.messagesPage = dialogs_reducer(this._state.messagesPage, action);

        this._callSubscriber(this._state);
    }
}
export default store;