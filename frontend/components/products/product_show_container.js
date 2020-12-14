import { connect } from 'react-redux';
import { fetchProduct } from '../../actions/product_actions';

import ProductShow from './product_show';

const msp = (state, ownProps) => {
    return {
        product: state.entities.products[ownProps.match.params.productId],
        // shades: Object.values(state.entities.products.shades)
    }
}

const mdp = dispatch => ({
    fetchProduct: (id) => dispatch(fetchProduct(id))
})

export default connect(msp, mdp)(ProductShow)
