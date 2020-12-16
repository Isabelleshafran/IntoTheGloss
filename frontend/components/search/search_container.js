import { connect } from 'react-redux'
import ProductIndex from '../products/product_index'
import { openModal } from '../../actions/modal_actions'

const msp = (state) => ({
    products: Object.values(state.entities.products), 
    category: 'search'
})


const mdp = (dispatch) => {
    return ({
        fetchSearch: (products) => dispatch(fetchSearch(products)),
        openModal: (modal) => dispatch(openModal(modal))
    })
}

export default connect(msp, mdp)(ProductIndex)