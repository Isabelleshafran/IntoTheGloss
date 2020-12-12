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
            console.log(this.props)
            return ( 
                <div className="product-show">
                    {this.props.product.title}
                    <br/>
                    {this.props.product.description}
                    <br/>
                    {this.props.product.details}
                    <br/>
                    ${this.props.product.price}
                    <br/>
                    <div className="product-show-image">
                        <img src={window.generic_product} />
                        {/* <img src={this.props.product.imgUrl} alt=""/> */}
                        {/* {this.props.produc} */}
                    </div>
                </div>
             );
        }
  
    }
}
 
export default ProductShow;