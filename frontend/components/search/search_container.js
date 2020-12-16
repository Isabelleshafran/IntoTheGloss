import { connect } from 'react-redux'
import ProductIndex from '../products/product_index'

const msp = (state) => ({
    products: Object.values(state.entities.products), 
    category: 'search'
})


const mdp = (dispatch) => {
    return ({
        fetchSearch: (products) => dispatch(fetchSearch(products))
    })
}

export default connect(msp, mdp)(ProductIndex)