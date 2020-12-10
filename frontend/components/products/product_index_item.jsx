import { withRouter } from 'react-router-dom'
import React from 'react';

class ProductIndexItem extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() { 
        // debugger
        const { product } = this.props
        return (
            <div className="product-index">
                
                <div className="product-index-title">
                    {product.title}
                </div>
                <div className="product-index-image">
                    {/* {product.img_url} */}
                </div>
                <div className="product-index-description">
                    {product.description}, 
                </div>
                <div className="product-index-price">
                    ${product.price}
                </div>
            </div>
          );
    }
}
 
export default ProductIndexItem;