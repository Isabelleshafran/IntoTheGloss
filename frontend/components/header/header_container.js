import { connect } from 'react-redux'

import Header from './header'
import { openModal, closeModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';


const msp = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

const mdp = (dispatch) => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
})

export default connect(msp, mdp)(Header)