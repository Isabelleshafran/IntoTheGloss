import React from 'react'

class CartItem extends React.Component {
    constructor(props) {
        super(props);
        
    }

    handleRemove(){
        const cartItems = JSON.parse(localStorage.getItem('cartObj'))
        const id = this.props.product.id
        delete cartItems[id]
        localStorage.setItem('cartObj', JSON.stringify(cartItems))

        this.props.closeModal()
    }
    render() { 
        return ( 
            <div>
                <div className="cart-item">
                    <div className="cart-title">{this.props.product.title}</div>
                    <div className="cart-quantity">{this.props.product.quantity} x</div>
                    <div className="cart-price">${this.props.product.price}</div>

                    <button className="cart-remove"type="submit" onClick={() => this.handleRemove()}>Remove</button>
                    <br/>
                    <br/>
        
                </div>
                
            </div>
         );
    }
}
 
export default CartItem;