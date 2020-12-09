import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import SessionSigninForm from './session_signin_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = ({errors, entities: { users }, session }) => ({
    errors: errors.session, 
    formType: 'sign in', 
    form: {email: "", password: ""}, 
    currentUser: users[session.id]
})

const mdp = dispatch => ({
    processForm: (user) => dispatch(login(user)), 
    otherForm: (
        <button onClick={() => dispatch(openModal('signup'))}>
            Create Account 
        </button>
    ),
    closeModal: () => dispatch(closeModal()), 
    openModal: modal => dispatch(openModal(modal)), 
    login: (user) => dispatch(login(user))
})

export default connect(msp, mdp)(SessionSigninForm);