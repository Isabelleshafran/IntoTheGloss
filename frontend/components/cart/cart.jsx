import React from 'react';
import CartItem from './cart_item'

class Cart extends React.Component {
    constructor(props) {
        super(props);
    
    }

    StoragePull(){
        const cartItems = JSON.parse(localStorage.getItem('cartObj')) || {}
        return Object.values(cartItems)
    }

    CartTotal() {
        let obj = this.StoragePull()
        let total = 0
        for(let id in obj){
            total += (obj[id].price * obj[id].quantity)
        }
        return total
    }

    handleCheckOut(){
        const items = JSON.parse(localStorage.getItem('cartObj'))

        for(let key in items){
            delete items[key]
            localStorage.setItem('cartObj', JSON.stringify(items))
        }

        if(!this.props.currentUser) {
            this.props.openModal('signup')
        } else {
            this.props.openModal('account')
        }
    }
    
render() { 
        return (
            <div>
                <div className="your-bag-header">
                    <div onClick={this.props.closeModal} className="x">X</div>
                    <div className="your-bag">Your Bag: </div>
                </div>
                <br/>

                <div className="cart">
                    {this.StoragePull().map(product => {
                        return (
                            <div>
                                <CartItem product={product} 
                                key={product.title}
                                openModal={this.props.openModal}
                                closeModal={this.props.closeModal}/>
                            </div>
                        )
                    })}

                </div>
                <div>
                    <div className="cart-total">
                        <div className="estimated-total">Estimated Total: </div>
                        <div>${this.CartTotal()}</div>
                    </div>

                </div>

                <button className="check-out" onClick={() => this.handleCheckOut()}>Check Out</button>
            </div>
        )
    }
}
 
export default Cart;