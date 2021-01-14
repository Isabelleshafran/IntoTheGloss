import React from 'react';
import FeaturedImageItem from './featured_image_item'
import { Link } from 'react-router-dom';




class FeaturedImages extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProducts(this.props.category)
    }

    render() { 
        const { products } = this.props;

        return ( 
            <div>
                <div className="feature-home">
                    <div className="feature-text">
                        <h1 className="shop-featured-products">SHOP OUR FEATURED PRODUCTS</h1>
                        <Link to={"/shopall"}><div className="shop-all-products">Shop All Products</div></Link>
                    </div>

                </div>
                <div className="splash-home">
                    <div className="splash-products">
                        {products.map(product => {
                            return (
                                <FeaturedImageItem 
                                key={product.id} 
                                product={product} 
                                category={this.props.category}
                                openModal={this.props.openModal}/>
                            )
                        })}
                    </div>
                </div>
            </div>
         );
    }
}
 
export default FeaturedImages;