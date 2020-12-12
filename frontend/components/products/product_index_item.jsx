import { withRouter } from 'react-router-dom'
import React from 'react';
import { Link } from 'react-router-dom';

class ProductIndexItem extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() { 
        const { product } = this.props
        return (
            <div className="product-index">

                <div className="product-index-image">
                    <img src={window.generic_product} />
                </div>

                <div className="product-index-info">
                    <div className="product-index-title">
                      <Link to={`/${this.props.category}/${product.id}`}>{product.title}</Link>
                    </div>
                    <div className="product-index-description">
                        {product.description}, 
                    </div>
                    <div className="product-index-price">
                        ${product.price}
                    </div>
                    
                </div>
            
            </div>
          );
    }
}


 
export default ProductIndexItem;