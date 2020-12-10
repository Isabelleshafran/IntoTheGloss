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
        // this is working bc when i click shop all this is invoked (if i comment it out no action dispatched)
        this.props.fetchProducts()  
    }

    // hello shows up at the bottom of the page??

    render() { 
        const { products } = this.props;
        // debugger
        return ( 
            <div className="products">
                <h1>Shop All Products</h1>
                {/* Shop All Products */}
                {products.map(product => {
                    return (
                     <ProductIndexItem key={product.id} product={product} />   
                    )
                })}
            </div>
         );
    }
}
 
export default ProductIndex;



// two issues 
//  1 - not rendering products 
// 2 - doesnt go to another page (shows up athe bottom of the splash page)