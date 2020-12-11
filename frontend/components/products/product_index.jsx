import React from 'react';
import { withRouter } from 'react-router-dom'
import ProductIndexItem from './product_index_item'


class ProductIndex extends React.Component {
    constructor(props) {
        super(props);
        
        // this.state = this.props.category
    }



    componentDidMount(){
        this.props.fetchProducts(this.props.category)  
        

    }

    componentDidUpdate(prevProps){
        if(prevProps.match.path !== this.props.match.path) {
            this.props.fetchProducts(this.props.category)
        }
    }


    render() { 
        console.log(this.props)
        const { products } = this.props;
        return ( 
            <div className="products">

                <h1>{this.props.category}</h1>
                {products.map(product => {
                    return (
                     <ProductIndexItem key={product.id} product={product} category={this.props.category}/>   
                    )
                })}
            </div>
         );
    }
}
 
export default ProductIndex;


