import React from 'react';
import { Link } from 'react-router-dom';


class FeaturedImageItem extends React.Component {
    constructor(props) {
        super(props);
    }

    handleCart() {
        if (!this.props.currentUser) {
            this.props.openModal('no_user_cart')
        }
    }


    render() { 
        const { product } = this.props
        return ( 
            <div className="splash-image-index">

                <div className="splash-index-image">
                    <img src={this.props.product.imgUrl} />
                </div>
                <div className="product-index-info">

                    <div className="product-index-title">
                        <Link to={`/shopall/${product.id}`}>{product.title}</Link>
                        <div className="product-index-description">
                            {product.description}
                        </div>
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
 
export default FeaturedImageItem;