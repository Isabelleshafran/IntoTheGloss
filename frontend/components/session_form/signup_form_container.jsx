import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionSignupForm from './session_signup_form';
import { openModal, closeModal } from '../../actions/modal_actions';


const msp = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Create account',
        // navLink: <Link to="/signin">sign in</Link>,
        form: { email: "", password: "", first_name: "", last_name: ""}
    };
};

const mdp = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('signin'))}>
                Sign In
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(msp, mdp)(SessionSignupForm);
