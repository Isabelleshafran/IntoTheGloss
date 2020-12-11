import React from 'react';



class ProductShow extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount(){
        this.props.fetchProduct(this.props.match.params.productId)
        // console.log(this.props)
    }


    render() { 
        if(!this.props.product){
            return null
        } else {
            return ( 
                <div className="product-show">
                    {this.props.product.title}
                    <br/>
                    {this.props.product.description}
                    <br/>
                    {this.props.product.details}
                    <br/>
                    ${this.props.product.price}
                </div>
             );
        }
  
    }
}
 
export default ProductShow;