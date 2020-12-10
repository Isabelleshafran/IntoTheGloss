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
import ProductIndexContainer from "./products/product_index_container";


const App = () => (
    <div>
        <header>
            <Modal />
            <HeaderContainer />
        </header>
    <Switch>
        <Route exact path="/shopall" component={ProductIndexContainer} />
    </Switch>
    </div>
);

export default App;