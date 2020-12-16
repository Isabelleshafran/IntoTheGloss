import React from 'react'

class CartItem extends React.Component {
    constructor(props) {
        super(props);
        
    }

    handleRemove(){
        const cartItems = JSON.parse(localStorage.getItem('cartObj'))
        const id = this.props.product.id
        // localStorage.removeItem('id')
        delete cartItems[id]
        localStorage.setItem('cartObj', JSON.stringify(cartItems))

        this.props.closeModal()
    }
    render() { 
        return ( 
            <div className="cart-item">
                <div className="cart-details">

                    <div className="cart-image">
                        <img src={this.props.product.img} alt="" />
                    </div>

                    <div className="info-remove">
                        <div className="cart-item-info">
                            <div className="cart-title"> {this.props.product.quantity} x {this.props.product.title}</div>
                            <div className="cart-title"> {this.props.product.shade}</div>

                            <div className="cart-price">${this.props.product.price}</div>
                        </div>

                        <div>
                            <button className="cart-remove" type="submit" onClick={() => this.handleRemove()}>Remove</button>
                        </div>
                    </div>

                </div>
            </div>
         );
    }
}
 
export default CartItem;