import React from 'react';
import { Link } from 'react-router-dom'
import Modal from '../modal/modal';
import GreetingContainer from '../greeting/greeting_container'



class Header extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() { 
        return ( 
            <div className="main-header">
                <Link to="/">
                    <main className="logo">IntoTheGloss.</main>
                </Link>
                <div>
                    <ul className="greeting-container"> 
                        <GreetingContainer />
                    </ul>
                </div>
            </div>
         );
    }
}
 
export default Header;