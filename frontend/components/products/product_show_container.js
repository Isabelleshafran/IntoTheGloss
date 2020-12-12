import { connect } from 'react-redux';
import { fetchProduct } from '../../actions/product_actions';

import ProductShow from './product_show';

const msp = (state, ownProps) => {
    // if (ownProps.match.path.productId === 'bb'){
    //     // debugger
    //     // return ({product: state.entities.products.title["Boy Brow"]})
    //     return ({ product: Object.values(state.entities.products[3]) })
    // } else {
    //     return ({
    //         product: state.entities.products[ownProps.match.params.productId]
    //     })
    // }
    return {
        product: state.entities.products[ownProps.match.params.productId]
    }
}

const mdp = dispatch => ({
    fetchProduct: (id) => dispatch(fetchProduct(id))
})

export default connect(msp, mdp)(ProductShow)
