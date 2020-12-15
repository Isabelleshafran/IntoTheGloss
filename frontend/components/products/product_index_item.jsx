import { withRouter } from 'react-router-dom'
import React from 'react';
import { Link } from 'react-router-dom';
import ShadeShow from '../shades/shade_index';

class ProductIndexItem extends React.Component {
    constructor(props) {
        super(props);
        
    }

    handleCart() {
        const cart = JSON.parse(localStorage.getItem('cartObj')) || {}

        const id = this.props.product.id
        const title = this.props.product.title
        const price = this.props.product.price
        const img = this.props.product.imgUrl


        let quantity;

        if (!cart[id]) {
            quantity = 1
        } else {
            quantity = cart[id].quantity + 1
        }

        cart[id] = { id, title, quantity, price, img}

        localStorage.setItem('cartObj', JSON.stringify(cart))

        this.props.openModal('cart')

    }

    render() { 
        const { product } = this.props
   
        return (
            <div className="product-index">

                <div className="product-index-image">
                    <img src={this.props.product.imgUrl}/>
                </div>
                <div className="product-index-info">
                    
                    <div className="product-index-title">
                      <Link to={`/${this.props.category}/${product.id}`}>{product.title}
                        <div className="product-index-description">
                            {product.description}
                        </div>
                        </Link>
                    </div>

                    <button className="product-index-price" onClick={() => this.handleCart()}>
                        <div>Add to Bag</div>
                        <div>${product.price}</div>
                    </button>

                </div>
            
            </div>
          );
    }
}


 
export default ProductIndexItem;