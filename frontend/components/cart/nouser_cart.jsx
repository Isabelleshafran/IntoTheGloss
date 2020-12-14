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

            <div className='bottom-cart'> 

                <img className="glogo" src={window.shopping_cart_g} />
                <div className="create-account-button-cart" onClick={() => dispatch(this.props.openModal('signup'))}>Create an Account Here</div>

            </div>

            </div>


         );
    }
}
 
export default NoUserCart;