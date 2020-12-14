import React from 'react'

class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    handleRemove(){
        const string = JSON.stringify(this.props.product)
        console.log(string)
        localStorage.removeItem(string)
    }


    render() { 
        return ( 
            <div>
                {/* {console.log(this.props.product)} */}
                <div>Title: {this.props.product[1]}</div>
                <div>Quantity: {this.props.product[2]}</div>
                <button type="submit" onClick={() => this.handleRemove()}>Remove</button>
                <br/>
                <br/>
            </div>
         );
    }
}
 
export default CartItem;