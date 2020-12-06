import React from 'react';
import ReactDOM from 'react-dom';
import {login, signup, logout } from './util/session_api_util'

document.addEventListener("DOMContentLoaded", () => {

    // testing 
    window.login = login 
    window.signup = signup
    window.logout = logout
    // testing 

    const root = document.getElementById("root")
    ReactDOM.render(<main>IntoTheGloss</main>, root)
})