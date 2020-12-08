import React from "react";
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import Modal from './modal/modal';
import HeaderContainer from './header/header_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
    <div>
        <header>
            <Modal />
            <HeaderContainer />
        </header>
    <Switch>
        {/* <AuthRoute exact path="/signin" component={SigninFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
    </Switch>
    </div>
);

export default App;