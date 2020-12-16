import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Header from './header'
import { openModal, closeModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import { fetchSearch } from '../../actions/product_actions'


const msp = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

const mdp = (dispatch) => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    fetchSearch: (products) => dispatch(fetchSearch(products))
})

export default withRouter(connect(msp, mdp)(Header))