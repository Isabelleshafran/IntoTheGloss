import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/product_actions';
import FeaturedImages from './featured_images'

const msp = (state) => {

    return ({
        products: Object.values(state.entities.products),
        category: "/"
    })
}


const mdp = (dispatch) => {
    return ({
        fetchProducts: (name) => dispatch(fetchProducts(name)),
    })
}

export default connect(msp, mdp)(FeaturedImages)


