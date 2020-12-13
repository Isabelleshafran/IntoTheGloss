import { connect } from 'react-redux';
import React from 'react';
import { login, removeErrors } from '../../actions/session_actions';
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
    closeModal: () => dispatch(closeModal()), 
    openModal: modal => dispatch(openModal(modal)), 
    login: (user) => dispatch(login(user)), 
    removeErrors: () => dispatch(removeErrors())
})

export default connect(msp, mdp)(SessionSigninForm);