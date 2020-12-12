import React from 'react';



class ProductShow extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount(){
        this.props.fetchProduct(this.props.match.params.productId)
    }

    render() { 

        if(!this.props.product){
            return null
        } else {
            return ( 
                <div className="product-show">

                    <div className="product-show-image">
                        <img src={window.generic_product} />
                        {/* <img src={this.props.product.imgUrl} alt=""/> */}
                        {/* {this.props.produc} */}
                    </div>

                    <div className="product-show-text">
                        <div>
                            <div className="product-show-title">{this.props.product.title}</div>
                            <div className="product-show-description">{this.props.product.description}</div>
                            <div className="product-show-details">{this.props.product.details}</div>
                        </div>
                        <div>
                            <button className="product-show-price">
                                <div>Add to Bag - ${this.props.product.price}</div>
                            </button>
                        </div>

                    </div>

        
                </div>
             );
        }
  
    }
}
 
export default ProductShow;