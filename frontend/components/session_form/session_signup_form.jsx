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
                <form onSubmit={this.handleSubmit}>
                    Sign up
                    <br />
                    <label>First Name:
                        <input type="text" value={this.state.first_name} onChange={this.handleChange('first_name')} />
                    </label>
                    <br/>
                    <label>Last Name: 
                        <input type="text" value={this.state.last_name} onChange={this.handleChange('last_name')} />
                    </label>
                    <br/>
                    <label>Email Address:
                        <input type="text" value={this.state.email} onChange={this.handleChange('email')} />
                    </label>
                    <br />
                    <label>Password:
                        <input type="password" value={this.state.password} onChange={this.handleChange('password')} />
                    </label>
                    <br />
                    <input className="session-submit" type="submit" value={this.props.formType} />
                </form>
                 or {this.props.navLink}
                {this.renderErrors()}
            </div>
        )
    }
}


export default SessionSignupForm;