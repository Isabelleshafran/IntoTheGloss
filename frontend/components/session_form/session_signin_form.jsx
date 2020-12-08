import React from 'react';
// import Greeting from '../greeting/greeting';
// import GreetingContainer from '../greeting/greeting_container';


class SessionSigninForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.form;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
        this.props.openModal('account')
    }   
    
    handleChange(field){
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    renderErrors() { 
        const { errors } = this.props
        return ( 
            <ul>
                {errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
         );
    }

    render() {
        return (
            <div className="signin-form-container">
                <form onSubmit={this.handleSubmit} className="signin-form-box">
                    <span>Sign in</span>
                    {this.renderErrors()}
                    <div className="signin-form">
                        <br/>
                        <label>Email Address: 
                            <br/>
                            <input type="email" 
                            value={this.state.email} 
                            onChange={this.handleChange('email')} 
                            className="signin-input"/>
                        </label>
                        <br/>
                        <label>Password: 
                            <br/>
                            <input type="password" 
                            value={this.state.password} 
                            onChange={this.handleChange('password')} 
                            className="signin-input"/>
                        </label>
                        <br/>
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                    <br/>
                </form>
                or
                <div className="create-account-button">
                    {this.props.otherForm}
                </div>
                <div onClick={this.props.closeModal} className="close-x">X</div>
            </div>  
        )
    } 
}

 
export default SessionSigninForm;