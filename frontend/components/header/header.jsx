import React from 'react';
import { Link } from 'react-router-dom'



class Header extends React.Component {
    constructor(props) {
        super(props);
        
        // this.handleClick = this.handleClick.bind(this);
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
                <Link to="/"><main className="logo">IntoTheGloss.</main></Link>
                <div onClick={() => this.handleClick()}><i className="fas fa-user">Icon</i></div>
            </div>
         );
    }
}
 
export default Header;