import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionSigninForm from './session_signin_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = ({errors}) => ({
    errors: errors.session, 
    formType: 'sign in', 
    // navLink: <Link to={"/signup"}>create account</Link>, 
    form: {email: "", password: ""}
})

const mdp = dispatch => ({
    processForm: (user) => dispatch(login(user)), 
    otherForm: (
        <button onClick={() => dispatch(openModal('signup'))}>
            create account 
        </button>
    ),
    closeModal: () => dispatch(closeModal())
})

export default connect(msp, mdp)(SessionSigninForm);