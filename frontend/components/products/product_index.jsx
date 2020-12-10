import React from 'react';
import ProductIndexItem from './product_index_item'


class ProductIndex extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount(){
        this.props.fetchProducts()
    }

    render() { 
        const { products } = this.props;
        return ( 
            <div>
                {products.map(product => {
                    <ProductIndexItem key={product.id} product={product}/>
                })}
            </div>
         );
    }
}
 
export default ProductIndex;

