import { connect } from 'react-redux';
import { fetchProducts } from '../../util/product_api_util';
import ProductIndex from './product_index';
import { asArray } from '../../reducers/selectors';


const msp = (state) => ({
    products: asArray(state.entities)
})

const mdp = (dispatch) => ({
    fetchProducts: () => dispatch(fetchProducts())
})

export default connect(msp, mdp)(ProductIndex)

