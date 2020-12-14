import React from 'react';

class Cart extends React.Component {
    constructor(props) {
        super(props);
    
    }
    
    render() { 
        console.log(this.props)
        
        if(!this.props.currentUser) {
            return (
                <div>
                    <div className="no-user-cart">
                        <div className="no-user-header">Please sign in to view or add to your cart</div>
                        <div onClick={this.props.closeModal} className="close-x">X</div>
                    </div>
                    <div className='bottom-cart'>
                        <img className="glogo" src={window.shopping_cart_g} />
                        <div className="create-account-button-cart" onClick={() => dispatch(this.props.openModal('signup'))}>Create an Account Here</div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>logged in!!</div>
            )
        }

    }
}
 
export default Cart;