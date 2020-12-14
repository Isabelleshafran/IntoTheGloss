import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/product_actions';
import FeaturedImages from './featured_images'
import { openModal, closeModal } from '../../actions/modal_actions';


const msp = (state) => {

    return ({
        products: Object.values(state.entities.products),
        category: "/", 
        currentUser: state.entities.users[state.session.id]
    })
}


const mdp = (dispatch) => {
    return ({
        fetchProducts: (name) => dispatch(fetchProducts(name)),
        openModal: modal => dispatch(openModal(modal))
    })
}

export default connect(msp, mdp)(FeaturedImages)


