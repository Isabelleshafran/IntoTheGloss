import React from "react";
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_form_container';
import SigninFormContainer from './session_form/signin_form_container';

const App = () => (
    <div>
        <header>
            <main>IntoTheGloss</main>
            <GreetingContainer />
        </header>

        <Route path="/signin" component={SigninFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;