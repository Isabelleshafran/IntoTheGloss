import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import Cart from './cart'


const msp = (state) => ({
    currentUser: state.entities.users[state.session.id] 
})

const mdp = (dispatch) => ({
    logout: () => dispatch(logout()),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal))
})

export default connect(msp, mdp)(Cart)