import React from 'react';
import { Link } from 'react-router-dom';


class Account extends React.Component {
    constructor(props) {
        super(props); 

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.logout()
        this.props.openModal('signin')
    }
    render() { 
        return ( 
            <div className="account-container">
                <main className="your-account">Your Account</main>
                <br/>
                <ul>Orders</ul>
                <ul><Link to={"https://github.com/Isabelleshafran/IntoTheGloss"}>GitHub</Link></ul>
                <ul>Linkedin</ul>
                <ul>Refer a Friend</ul>
                <ul className="account-signout" onClick={() => this.handleClick()}>Sign Out</ul>
                <div onClick={this.props.closeModal} className="close-x">X</div>
            </div>
         );
    }
}
 
export default Account;

