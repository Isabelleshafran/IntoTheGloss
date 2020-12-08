import React from 'react';
// import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        <nav>
            <button onClick={() => openModal('signin')}>Sign In</button>
            &nbsp;or&nbsp;
            <button onClick={() => openModal('signup')}>Create an account</button>
        </nav>
    )

    const peronsalGreeting = () => (
        <hgroup>
            <h2>Welcome {currentUser.first_name}</h2>
            <button onClick={logout}>Sign Out</button>
        </hgroup>
    )

    return currentUser ? peronsalGreeting(currentUser, logout) : sessionLinks();
}

export default Greeting;