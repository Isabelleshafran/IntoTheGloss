import { connect } from 'react-redux';
import { fetchProduct } from '../../actions/product_actions';
import { openModal, closeModal } from '../../actions/modal_actions';


import ProductShow from './product_show';

const msp = (state, ownProps) => {
    return {
        product: state.entities.products[ownProps.match.params.productId],
        currentUser: state.entities.users[state.session.id]
    }
}

const mdp = dispatch => ({
    fetchProduct: (id) => dispatch(fetchProduct(id)), 
    openModal: modal => dispatch(openModal(modal))
})

export default connect(msp, mdp)(ProductShow)
