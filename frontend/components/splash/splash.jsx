import React from 'react';
import { Link } from 'react-router-dom'

class Splash extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() { 
        return ( 
            <div>
                <div className="hero">
                    <div className="hero-images">
                        <img className="left-hero" src={window.left_hero} />
                        <img className="right-hero"src={window.right_hero} />
                    </div>
                        <img className="g-png" src={window.glossier_g} />
                    <div>
                        <h3 className="boy-brow-copy">Boy Brow is back.</h3>
                        <button><Link to={"/"} className="boy-brow-shop-now">Shop now</Link></button>
                    </div>
                </div>
                <div className="pink-masthead">
                    <h1>Beauty inspired by real life.</h1>
                    <br/>
                    <h3>Glossier is a new approach to beauty. It’s about fun and freedom and being OK with yourself today. We make intuitive, uncomplicated products designed to live with you</h3>
                </div>
                <br/>
                <br/>
            </div>
         ); 
    }
}
 
export default Splash;