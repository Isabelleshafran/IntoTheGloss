import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionSignupForm from './session_signup_form';

const msp = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'sign up',
        navLink: <Link to="/login">log in</Link>,
        form: { email: "", password: "", first_name: "", last_name: ""}
    };
};

const mdp = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
    };
};

export default connect(msp, mdp)(SessionSignupForm);
