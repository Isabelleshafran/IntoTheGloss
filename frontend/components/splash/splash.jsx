import React from 'react';
import { Link } from 'react-router-dom'

class Splash extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() { 
        return ( 
            <div className="hero">
                <div className="hero-images">
                    <img className="left-hero" src={window.left_hero} />
                    <img className="right-hero"src={window.right_hero} />
                </div>
                    <img className="g-png" src={window.glossier_g} />
            </div>
         ); 
    }
}
 
export default Splash;