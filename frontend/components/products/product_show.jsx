import React from 'react';
import ShadeShow from '../shades/shade_index'


class ProductShow extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount(){
        this.props.fetchProduct(this.props.match.params.productId)
    }

    handleCart(){
        const cart = JSON.parse(localStorage.getItem('cartObj')) || {}

        const id = this.props.product.id
        const title = this.props.product.title
        const price = this.props.product.price
        
        let quantity;

        
        // ERROR: SITE BREAKS IF YOU OPEN CART WHEN EMPTY AND REMOVE ITEM
        
        // console.log(cart[id])
        // debugger
        if(!cart[id]){
            quantity = 1
        } else {
            quantity = cart[id].quantity + 1
        }

        cart[id] = {id, title, quantity, price}
        
        localStorage.setItem('cartObj', JSON.stringify(cart))
  
        this.props.openModal('cart')
    }

    render() { 
        // console.log(this.props)
        if(!this.props.product){
            return null
        } else {
            const color = Object.values(this.props.product.shades)
            return ( 
                <div className="product-show">

                    <div className="product-show-image">
                        <img src={this.props.product.imgUrl}/>
                    </div>
                    <div className="product-show-text">
                        <div>
                            <div className="product-show-title">{this.props.product.title}</div>
                            <div className="product-show-description">{this.props.product.description}</div>
                            <div className="product-show-details">{this.props.product.details}</div>
                            <br/>
                            <br/>
                            <div>
                                <div className="why"> WHY IT'S SPECIAL: </div>
                                <br/>
                                <li className="product-show-whyspecial">{this.props.product.whyspecial}</li>
                            </div>
                        </div>

                        <div>
                        
                            <div className="shade-index" > 
                                {color.map(shade => <ShadeShow shade={shade} key={shade.name} />)}
                            </div>
            

                            <button className="product-show-price" onClick={() => this.handleCart()}>
                                <div>Add to Bag - ${this.props.product.price}</div>
                            </button>
                        </div>

                    </div>

        
                </div>
             );
        }
  
    }
}
 
export default ProductShow;