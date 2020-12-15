import React from 'react'

class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
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
                <div>
                    <div>Title: {this.props.product.title}</div>
                    <div>Quantity: {this.props.product.quantity}</div>
                    <div>Price: {this.props.product.price}</div>

                    <button type="submit" onClick={() => this.handleRemove()}>Remove</button>
                    <br/>
                    <br/>
        
                </div>
                
            </div>
         );
    }
}
 
export default CartItem;