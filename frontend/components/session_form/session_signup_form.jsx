import React from 'react';


class SessionSignupForm extends React.Component {
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

    handleChange(field) {
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
            <div className="signup-form-container">
                <form onSubmit={this.handleSubmit} className="signup-form-box">
                    <span>Sign up</span>
                    {this.renderErrors()}
                    <div className="signup-form">
                        <br />
                        <label>First Name:
                            <br/>
                            <input type="text" 
                            value={this.state.first_name} 
                            onChange={this.handleChange('first_name')} 
                            className="signup-input"/>
                        </label>
                        <br/>
                        <label>Last Name: 
                            <br/>
                            <input type="text" 
                            value={this.state.last_name} 
                            onChange={this.handleChange('last_name')} 
                            className="signup-input"/>
                        </label>
                        <br/>
                        <label>Email Address:
                            <br/>
                            <input type="email" 
                            value={this.state.email} 
                            onChange={this.handleChange('email')} 
                            className="signup-input"/>
                        </label>
                        <br />
                        <label>Password:
                            <br/>
                            <input type="password" 
                            value={this.state.password} 
                            onChange={this.handleChange('password')} 
                            className="signup-input"/>
                        </label>
                        <br />
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                    <br/>
                </form>
                or 
                <div className="sign-in-button">
                    {this.props.otherForm}
                </div>
                <div onClick={this.props.closeModal} className="close-x">X</div>
            </div>
        )
    }
}


export default SessionSignupForm;