import React from 'react';
import { Link } from 'react-router-dom'



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

    handleCart(){
        if(!this.props.currentUser){
            this.props.openModal('no_user_cart')
        } else {
            this.props.openModal('cart')
        }
    }

    render() { 
        return ( 
            <div>
                <nav className="main-header">
                    <div className="top-header">
                        <div><i className="fas fa-search"></i></div>
                        <Link to="/"><div className="glossier">IntoTheGloss.</div></Link>
                        <div className="right-nav">
                            <div onClick={() => this.handleClick()}><i className="far fa-user"></i></div>
                            <div onClick={() => this.handleCart()}><i className="fas fa-shopping-cart"></i></div>
                        </div>
                    </div>
                    <div className="bottom-header">
                        <Link to="/shopall"><div className="shop-all">Shop All</div></Link>
                        <Link to="/makeup"><div className="makeup">Makeup</div></Link>
                        <Link to="/skincare"><div className="skincare">Skincare</div></Link>
                        <Link to="/body"><div className="body">Body</div></Link>
                    </div>
                </nav>
            </div>
         );
    }
}
 
export default Header;

