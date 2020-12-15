import React from 'react';
import CartItem from './cart_item'

class Cart extends React.Component {
    constructor(props) {
        super(props);
    
    }

    StoragePull(){
        const cartItems = JSON.parse(localStorage.getItem('cartObj'))
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
        // localStorage.clear()
        // localStorage.removeItem("cartObj")
        // this.props.openModal('signin')
    }
    
    render() { 
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
                                <CartItem product={product} 
                                key={product.title}
                                openModal={this.props.openModal}
                                closeModal={this.props.closeModal}/>
                            </div>
                        )
                    })}

                    <div>Estimated Total: {this.CartTotal()}</div>
                    {/* <button onClick={() => this.handleCheckOut()}>Check Out</button> */}
                </div>
            )
        }

    }
}
 
export default Cart;