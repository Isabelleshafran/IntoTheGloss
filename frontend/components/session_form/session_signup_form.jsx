import React from 'react';


class SessionSignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: "", 
            password: "", 
            first_name: "", 
            last_name: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoUser = this.demoUser.bind(this);

    }

    componentDidMount() {
        this.props.removeErrors()
    }


    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => this.props.openModal('account'));
    }

    handleChange(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    demoUser(e) {
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
            <div className="signup-form-container">
                <form onSubmit={this.handleSubmit} className="signup-form-box">
                    <span>Create an Account</span>
                    <br/>
                    <div className="signup-form">
                        <label>
                            <br/>
                            <input type="text" 
                            value={this.state.first_name} 
                            placeholder="First Name"
                            onChange={this.handleChange('first_name')} 
                            className="fname-input"/>
                        </label>

                        <label> 
            
                            <input type="text" 
                            value={this.state.last_name} 
                            placeholder="Last Name"
                            onChange={this.handleChange('last_name')} 
                            className="lname-input"/>
                        </label>
           
                        <label>
                     
                            <input type="email" 
                            value={this.state.email} 
                            placeholder="Email Address"
                            onChange={this.handleChange('email')} 
                            className="signup-input"/>
                        </label>
                        <label>
                    
                            <input type="password" 
                            value={this.state.password} 
                            placeholder="Password"
                            onChange={this.handleChange('password')} 
                            className="signup-input"/>
                        </label>
                        <div className="errors">{this.renderErrors()}</div>
                        <br />
                        <input className="create-account-submit" type="submit" value={this.props.formType} />
                    </div>
              
                </form>
                <br/>
                <br/>
                <div className="sign-in-text">Sign In to glossier.com</div>
                <button className="sign-in-button" onClick={() => this.props.openModal('signin')}>Sign In to glossier.com</button>
                <br/>
                <br/>
                <button className="demo-button" onClick={this.demoUser}>Demo User Sign In</button>
                <div onClick={this.props.closeModal} className="close-x">X</div>
            </div>
        )
    }
}


export default SessionSignupForm;