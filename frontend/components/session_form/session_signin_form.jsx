import React from 'react';


class SessionSigninForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.form;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoUser = this.demoUser.bind(this);

    }

    componentDidMount(){
        this.props.removeErrors()
    }

  

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state).then(this.props.openModal('account'));

    }   
    
    handleChange(field){
        return e => this.setState({ [field]: e.currentTarget.value })
    }


    demoUser(e){
        e.preventDefault()
        this.props
            .login({
                ["email"]: "guest@glossier.io",
                ["password"]: "password",
            })
            .then(this.props.openModal('account'));
        
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
                    <br/>
                    <div className="signin-form">
                        <label>
                            <br/>
                            <input type="email" 
                            value={this.state.email} 
                            placeholder="Email Address"
                            onChange={this.handleChange('email')} 
                            className="signin-input"/>
                        </label>
                        <label>
                   
                            <input type="password" 
                            value={this.state.password} 
                            placeholder="Password"
                            onChange={this.handleChange('password')} 
                            className="signin-input"/>
                        </label>
                        <div className="errors">{this.renderErrors()}</div>
                        <br/>
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                    <br/>
                </form>
                <p>Get free Glossier credit for referring friends and save payment information for easier purchasing</p>
                <button className="create-account-button" onClick={() => dispatch(this.props.openModal('signup'))}>Create an Account</button>
                <br/>
                <br/>
                <button className="demo-button" onClick={this.demoUser}>Demo User Sign In</button>
                <div onClick={this.props.closeModal} className="close-x">X</div>
            </div>  
        )
    } 
}

 
export default SessionSigninForm;