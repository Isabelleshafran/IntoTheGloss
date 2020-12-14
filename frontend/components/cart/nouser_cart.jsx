import React from 'react';

class NoUserCart extends React.Component {
    constructor(props) {
        super(props);
    
    }
    
    render() { 
        return ( 
            <div>
                <div className="no-user-cart">
                    <div className="no-user-header">Please sign in to view your cart</div>
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                </div>

                <button className="create-account-button-cart" onClick={() => dispatch(this.props.openModal('signup'))}>Create an Account Here</button>

            </div>


         );
    }
}
 
export default NoUserCart;