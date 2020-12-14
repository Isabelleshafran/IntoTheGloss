import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/product_actions';
import ProductIndex from './product_index';
import { openModal, closeModal } from '../../actions/modal_actions';


const msp = (state, ownProps) => {
 
    return ({
        products: Object.values(state.entities.products),
        category: ownProps.match.path.slice(1), 
        currentUser: state.entities.users[state.session.id]
    })
}



const mdp = (dispatch) => {
    return ({
        fetchProducts: (name) => dispatch(fetchProducts(name)),
        openModal: modal => dispatch(openModal(modal))

    })
}

export default connect(msp, mdp)(ProductIndex)

