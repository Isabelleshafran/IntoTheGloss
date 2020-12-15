import React from 'react'

class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    handleRemove(){
        const cartItems = JSON.parse(localStorage.getItem('cartObj'))
        // cartItems
        const id = this.props.product.id
        // console.log(id)
        // console.log(this.props.product)
        // localStorage.getItem(string)

        delete cartItems[id]
        // localStorage.removeItem(string)

        localStorage.setItem('cartObj', JSON.stringify(cartItems))

        this.props.closeModal()

        // localStorage.removeItem(id)
    }
    render() { 
        return ( 
            <div>
                <div>
                    {console.log(this.props.product)}
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