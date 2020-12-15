import { connect } from 'react-redux';
import Splash from './splash'
import { fetchProducts, fetchProduct } from '../../actions/product_actions'

const msp = (state) => ({
    currentUser: state.entities.users[state.session.id], 
    products: Object.values(state.entities.products)
})

const mdp = (dispatch) => ({
    fetchProducts: (name) => dispatch(fetchProduct(name))
})

export default connect(msp, mdp)(Splash)