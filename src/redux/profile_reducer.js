const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {

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

const profile_reducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: 6,
                message: state.newPostText
            };
            state.postsCollection.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default:
            return state;

    }
}

export const addPostActionCreator = () => {
    return {type: ADD_POST}
}
export const updateNewPostText = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
}


export default profile_reducer;