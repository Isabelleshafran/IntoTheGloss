import React from 'react';


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
                <ul>Shipping Addresses</ul>
                <ul>Payments and Credits</ul>
                <ul>Refer a Friend</ul>
                <ul className="account-signout" onClick={() => this.handleClick()}>Sign Out</ul>
                <div onClick={this.props.closeModal} className="close-x">X</div>
            </div>
         );
    }
}
 
export default Account;