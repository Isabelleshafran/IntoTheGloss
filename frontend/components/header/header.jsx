import React from 'react';
import { Link } from 'react-router-dom'
import SplashContainer from '../splash/splash_container'



class Header extends React.Component {
    constructor(props) {
        super(props);
    
    }

    handleClick() {
        
        if(!this.props.currentUser) {
            this.props.openModal('signup')
        } else {
            this.props.openModal('account')
        }

    }

    render() { 
        return ( 
            <div>
                <nav className="main-header">
                    <div className="top-header">
                        <i className="fas fa-search"></i>
                        <Link to="/"><div className="glossier">IntoTheGloss.</div></Link>
                        <div onClick={() => this.handleClick()}><i className="far fa-user"></i></div>
                    </div>
                    <div className="bottom-header">
                        <Link to="/shopall"><div className="shop-all">Shop All</div></Link>
                        <Link to="/"><div className="skincare">Skincare</div></Link>
                        <Link to="/"><div className="makeup">Makeup</div></Link>
                        <Link to="/"><div className="body">Body</div></Link>
                    </div>
                </nav>
                <SplashContainer />
            </div>
         );
    }
}
 
export default Header;