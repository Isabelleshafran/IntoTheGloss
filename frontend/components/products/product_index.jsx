import React from 'react';
import { withRouter } from 'react-router-dom'
import ProductIndexItem from './product_index_item'


class ProductIndex extends React.Component {
    constructor(props) {
        super(props);
        
    }

    // this.props.history.push('/shopall')

    componentDidMount(){
        // this.props.history.push('/shopall')
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
 
export default (ProductIndex);

