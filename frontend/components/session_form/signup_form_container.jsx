import { connect } from 'react-redux';
import React from 'react';
import { signup, login, removeErrors } from '../../actions/session_actions';
import SessionSignupForm from './session_signup_form';
import { openModal, closeModal } from '../../actions/modal_actions';


const msp = ({ errors, entities: { users }, session }) => {
    return {
        errors: errors.session,
        formType: 'Create Account',
        form: { email: "", password: "", first_name: "", last_name: ""}, 
        currentUser: users[session.id]
    };
};

const mdp = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        closeModal: () => dispatch(closeModal()), 
        openModal: modal => dispatch(openModal(modal)), 
        login: (user) => dispatch(login(user)), 
        removeErrors: () => dispatch(removeErrors())
    };
};

export default connect(msp, mdp)(SessionSignupForm);
