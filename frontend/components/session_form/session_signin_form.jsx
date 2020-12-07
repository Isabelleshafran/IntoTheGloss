import React from 'react';


class SessionSigninForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.form;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
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
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit}>
                    Sign in 
                    <br/>
                    <label>Email Address: 
                        <input type="text" value={this.state.email} onChange={this.handleChange('email')}/>
                    </label>
                    <br/>
                    <label>Password: 
                        <input type="password" value={this.state.password} onChange={this.handleChange('password')}/>
                    </label>
                    <br/>
                    <input className="session-submit" type="submit" value={this.props.formType} />
                </form>
            </div>  
        )
    } 
}

 
export default SessionSigninForm;