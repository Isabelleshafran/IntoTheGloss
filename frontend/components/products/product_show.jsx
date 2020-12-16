import React from 'react';
import ShadeShow from '../shades/shade_index'


class ProductShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: ''
        }

        this.handleColor = this.handleColor.bind(this)
        
    }


    handleColor(e) {
        this.setState({ color: e.target.dataset.shade })
        e.target.classList.toggle('selected')
    }

    componentDidMount(){
        this.props.fetchProduct(this.props.match.params.productId)
    }

    handleCart(){
        const cart = JSON.parse(localStorage.getItem('cartObj'))

        const id = this.props.product.id
        const title = this.props.product.title
        const price = this.props.product.price
        const img = this.props.product.imgUrl
        const shade = this.state.color
        
        let quantity;

        if(!cart[id]){
            quantity = 1
        } else {
            quantity = cart[id].quantity + 1
        }

        cart[id] = {id, title, quantity, price, img, shade}
        
        localStorage.setItem('cartObj', JSON.stringify(cart))
  
        this.props.openModal('cart')
    }

    render() { 
 
        if(!this.props.product){
            return null
        } else {
            const color = Object.values(this.props.product.shades)
            let selectedshade = this.state.color === "" ? "" : this.state.color
            return ( 
                <div className="product-show">

                    <div className="product-show-image">
                        <img src={this.props.product.imgUrl}/>
                    </div>
                    <div className="product-show-text">
                        <div>
                            <div className="product-show-title">{this.props.product.title}</div>
                            <div className="product-show-description">{this.props.product.description}</div>
                            <div className="product-show-details">{this.props.product.details}</div>
                            <br/>
                            <br/>
                            <div>
                                <div className="why"> WHY IT'S SPECIAL: </div>
                                <br/>
                                <li className="product-show-whyspecial">{this.props.product.whyspecial}</li>
                            </div>
                        </div>

                        <div>
                        
                            <div className="shade-index" onClick={this.handleColor}> 
                                {color.map((shade) => <ShadeShow shade={shade} key={shade.id} />)}
                            </div>
                                <div className="selectedshade">{selectedshade}</div>
            

                            <button className="product-show-price" onClick={() => this.handleCart()}>
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