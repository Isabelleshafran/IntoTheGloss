import React from 'react';
import CartItem from './cart_item'

class Cart extends React.Component {
    constructor(props) {
        super(props);
    
    }

    StoragePull(){
        const cartItems = JSON.parse(localStorage.getItem('cartObj'))
        let arr = []
        for (let id in cartItems) {
            arr.push([id, cartItems[id].title, cartItems[id].quantity])
        }

        console.log(arr)
        return arr;
    }
    
    render() { 
        // console.log(this.props)

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
                <div>
                    <div>Your Bag: </div>
                    <br/>
                    {this.StoragePull().map(product => {
                        return (
                            <div>
                                <CartItem product={product} key={product[0]}/>
                            </div>
                        )
                    })}
                </div>
            )
        }

    }
}
 
export default Cart;