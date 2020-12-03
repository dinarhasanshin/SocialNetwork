import React from 'react';
import {render} from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';

let reRenderTree = (state) => {
    render(
        <App store={ state } dispatch={ store.dispatch.bind(store) }/>,
        document.getElementById('root')
    );
}

reRenderTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    reRenderTree(state);
});






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
