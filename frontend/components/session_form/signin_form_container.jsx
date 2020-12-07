import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionSigninForm from './session_signin_form';

const msp = ({errors}) => ({
    errors: errors.session, 
    formType: 'sign in', 
    navLink: <Link to={"/signup"}>create account</Link>, 
    form: {email: "", password: ""}
})

const mdp = dispatch => ({
    processForm: (user) => dispatch(login(user))
})

export default connect(msp, mdp)(SessionSigninForm);