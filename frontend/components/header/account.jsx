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
                    <ul><a target="_blank" href="https://github.com/Isabelleshafran/IntoTheGloss">Github</a></ul>
                    <ul><a target="_blank" href="https://www.linkedin.com/in/isabelleshafran/">Linkedin</a></ul>
                    <ul><a target="_blank" href="https://jae-matchstick.herokuapp.com/">Refer a Friend</a></ul>
                    <ul className="account-signout" onClick={() => this.handleClick()}>Sign Out</ul>
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                </div>
            );

        }
    
}
 
export default Account;

