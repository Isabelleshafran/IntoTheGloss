import React from 'react';
import { Link } from 'react-router-dom'
import ProductIndexContainer from '../products/product_index_container';
import FeaturedImagesContainer from './featured_images_container';

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
                            <img className="g-png" src={window.glossier_g} />

                            <div className="hero-copy">
                                <h3 className="splash-copy">Get to know You</h3>
                                <h3 className="splash-copy-small">Sparkly, woodsy, and slightly sweet</h3>
                                <Link to={`/shopall/`}><button className="splash-shop-now">Shop Now</button></Link>
                            </div>

                        </div>
                    </div>
                    <div className="feat-container">
                        <FeaturedImagesContainer />
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

