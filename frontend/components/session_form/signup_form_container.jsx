import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, login } from '../../actions/session_actions';
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
        otherForm: (
            <button onClick={() => dispatch(openModal('signin'))}>
                Sign In to Glossier.com
            </button>
        ),
        closeModal: () => dispatch(closeModal()), 
        openModal: modal => dispatch(openModal(modal)), 
        login: (user) => dispatch(login(user))
    };
};

export default connect(msp, mdp)(SessionSignupForm);
