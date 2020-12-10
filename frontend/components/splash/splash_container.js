import { connect } from 'react-redux';
import Splash from './splash'
import { fetchProducts } from '../../actions/product_actions'

const msp = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

const mdp = (dispatch) => ({
    fetchProducts: () => dispatch(fetchProducts())
})

export default connect(msp, mdp)(Splash)