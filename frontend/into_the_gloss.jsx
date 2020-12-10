import React from 'react';
import ReactDOM from 'react-dom';
// import {login, signup, logout } from './actions/session_actions'
import { fetchProducts, fetchProduct } from './actions/product_actions'
import configureStore from './store/store'
import Root from './components/root';


document.addEventListener("DOMContentLoaded", () => {
    // const store = configureStore();

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    // testing 
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // window.login = login 
    // window.signup = signup 
    // window.logout = logout
        window.fetchProducts = fetchProducts
        window.fetchProduct = fetchProduct
    // testing 

    const root = document.getElementById("root")
    ReactDOM.render(<Root store={store}/>, root)
})