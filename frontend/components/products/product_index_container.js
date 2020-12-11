import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/product_actions';
import ProductIndex from './product_index';



const msp = (state, ownProps) => {
 
    return ({
        products: Object.values(state.entities.products),
        category: ownProps.match.path.slice(1)
    })
}



const mdp = (dispatch) => {
    return ({
        fetchProducts: (name) => dispatch(fetchProducts(name)),
    })
}

export default connect(msp, mdp)(ProductIndex)

