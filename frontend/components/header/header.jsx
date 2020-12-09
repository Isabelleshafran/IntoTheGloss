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

    render() { 
        return ( 
            <div className="main-header">
                <i className="fas fa-search"></i>
                <Link to="/"><div className="glossier">IntoTheGloss.</div></Link>
                <div onClick={() => this.handleClick()}><i className="far fa-user"></i></div>
            </div>
         );
    }
}
 
export default Header;