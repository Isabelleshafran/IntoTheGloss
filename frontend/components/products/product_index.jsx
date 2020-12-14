import React from 'react';
import { withRouter } from 'react-router-dom'
import ProductIndexItem from './product_index_item'


class ProductIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchProducts(this.props.category)  
        

    }

    componentDidUpdate(prevProps){
        if(prevProps.match.path !== this.props.match.path) {
            this.props.fetchProducts(this.props.category)
        }
    }

    title(){
        if(this.props.category === 'shopall'){
            return 'Shop All Products'
        } else if (this.props.category === 'makeup'){
            return 'Shop All Makeup'
        } else if (this.props.category === 'skincare') {
            return 'Shop All Skincare'
        } else {
            return 'Shop All Body'
        }
    }


    render() { 
        // console.log(this.props)
        const { products } = this.props;
        return ( 
            <div>
                <h1 className="product-title">{this.title(this.props.catgory)}</h1>
                <div className="products">
                    {products.map(product => {
                        return (
                         <ProductIndexItem key={product.id} product={product} category={this.props.category} openModal={this.props.openModal}/>   
                        )
                    })}
                </div>
            </div>
         );
    }
}
 
export default ProductIndex;


