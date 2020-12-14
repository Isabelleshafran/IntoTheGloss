import { withRouter } from 'react-router-dom'
import React from 'react';
import { Link } from 'react-router-dom';
import ShadeShow from '../shades/shade_index';

class ProductIndexItem extends React.Component {
    constructor(props) {
        super(props);
        
    }

    handleCart() {
        this.props.openModal('cart')
        // need items Id and quantity 
        //  setting keys on local storage 

        // cart js file will grab info from local storage 

        // only one cart js and if logic in return for which modal to open 

        // array of objects in local storage each ob has two keys (product id and quantity)
    }

    render() { 
        const { product } = this.props
        // console.log(this.props)
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