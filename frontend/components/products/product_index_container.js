import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/product_actions';
import ProductIndex from './product_index';
import { asArray } from '../../reducers/selectors';


const msp = (state) => {
 
    return ({
        products: asArray(state.entities)
    })
}



const mdp = (dispatch) => {
    return ({
        fetchProducts: () => dispatch(fetchProducts())
    })
}

export default connect(msp, mdp)(ProductIndex)

