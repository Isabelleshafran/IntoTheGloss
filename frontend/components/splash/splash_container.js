import { connect } from 'react-redux';
import Splash from './splash'
import { fetchProducts, fetchProduct } from '../../actions/product_actions'

const msp = (state) => ({
    currentUser: state.entities.users[state.session.id], 

})

const mdp = (dispatch) => ({
    fetchProducts: () => dispatch(fetchProducts())
    // fetchProducts: (id) => dispatch(fetchProduct(id))
})

export default connect(msp, mdp)(Splash)