import React, { Component } from 'react'
import './SigninForm.css';


export class SinginForm extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: ''
    };
    
    this.handleFormValues = this.handleFormValues.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  
  handleFormValues({ target: { name, value } }) {
    this.setState({ [name]: value })
  }
  
  handleFormSubmit(e) {
    const { signinUser, history } = this.props;
    const { email, password } = this.state;
    
    signinUser({ email, password, history });
    
    e.preventDefault();
  }
  
  renderFormError() {
    const { authorisationError } = this.props;
    return (
      <div className="alert alert-danger" role="alert">
        <span><strong>OOPS! </strong>{authorisationError}</span>
      </div>
    )
  }
  
  // TODO: Apply properly styles
  render() {
    const { email, password } = this.state;
    const { authorisationError} = this.props;
    return (
      <div>
        <h1>Singin Form</h1>
        <form onSubmit={this.handleFormSubmit} className="signin-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input value={email}
                   onChange={this.handleFormValues}
                   className="form-control"
                   id="email"
                   type="text"
                   name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input value={password}
                   onChange={this.handleFormValues}
                   className="form-control"
                   id="password"
                   type="password"
                   name="password"
            />
          </div>
          {authorisationError && this.renderFormError()}
          <button className="btn btn-primary">Sign in</button>
        </form>
      </div>
    
    )
  }
}