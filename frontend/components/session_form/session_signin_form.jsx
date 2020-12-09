import React from 'react';


class SessionSigninForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.form;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoUser = this.demoUser.bind(this);

    }

    componentDidMount(){
        // clear errors
        // this.props.errors.
        this.setState({ errors: "" })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
        if (this.props.currentUser) {
            this.props.openModal('account')
        }
        
    }   
    
    handleChange(field){
        return e => this.setState({ [field]: e.currentTarget.value })
    }


    demoUser(e){
        e.preventDefault()
        this.setState({
            email: "guest@glossier.io",
            password: "password", 
            first_name: "guest", 
            last_name: "user"
        }, () => this.props.login(this.state));

        if (this.props.currentUser) {
            this.props.openModal('account')
        }
        
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
                        <br/>
                        <label>
                            <br/>
                            <input type="password" 
                            value={this.state.password} 
                            placeholder="Password"
                            onChange={this.handleChange('password')} 
                            className="signin-input"/>
                        </label>
                        <br/>
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                    <br/>
                </form>
                <p>Get free Glossier credit for referring friends and save payment information for easier purchasing</p>
                <div className="create-account-button">{this.props.otherForm}</div>
                <br/>
                <br/>
                <button className="demo-button" onClick={this.demoUser}>Demo User Sign In</button>
                <div onClick={this.props.closeModal} className="close-x">X</div>
            </div>  
        )
    } 
}

 
export default SessionSigninForm;