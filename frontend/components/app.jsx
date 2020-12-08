import React from "react";
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import Modal from './modal/modal';
import SignupFormContainer from './session_form/signup_form_container';
import SigninFormContainer from './session_form/signin_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
    <div>
        <Modal />
        <header>
        <Link to="/" className="header-link">
            <main>IntoTheGloss</main>
        </Link>
        <GreetingContainer />
        </header>
    <Switch>
        {/* <AuthRoute exact path="/signin" component={SigninFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
    </Switch>
    </div>
);

export default App;