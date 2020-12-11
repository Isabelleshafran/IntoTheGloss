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

        // setTimeout(() => {
        //     this.props.fetchProducts(this.props.category)
        // }, 2000);
        // set time out 

        // console.log(this.state)
    }

    componentDidUpdate(){
        // check if url is different look at pokdex!
        // if different fetchProducts else .....might need to grab from url 
    }


    render() { 
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


