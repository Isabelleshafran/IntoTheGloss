import { connect } from 'react-redux'
import Header from './header'


const msp = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

const mdp = (dispatch) => ({
    // logout: () => dispatch(logout()),
    // openModal: modal => dispatch(openModal(modal))
})

export default connect(msp, mdp)(Header)