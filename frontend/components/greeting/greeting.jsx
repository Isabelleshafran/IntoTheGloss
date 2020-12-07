import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav>
            <Link to={"/signin"}>Sign in</Link>
            &nbsp;or&nbsp;
            <Link to={"/signup"}>Create an account</Link>
        </nav>
    )

    const peronsalGreeting = () => (
        <hgroup>
            <h2>Welcome {currentUser.first_name}</h2>
            <button onClick={logout}>Sign Out</button>
        </hgroup>
    )

    return currentUser ? peronsalGreeting() : sessionLinks();
}

export default Greeting;