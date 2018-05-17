import React, { Component } from 'react';


// TODO: Rewrite to reusable component or make it like HOC
export class Signup extends Component {
  
  
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        email: '',
        password: '',
        confirmedPassword: ''
      },
      isPasswordsEqual: false,
      isConfirmedPasswordFieldTouched: false
    };
    this.handleFormValues = this.handleFormValues.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.comparePasswords = this.comparePasswords.bind(this);
    this.handleConfirmedPasswordTouch = this.handleConfirmedPasswordTouch.bind(this);
  }
  
  
  handleFormSubmit(e) {
    const { formData: { email, password } } = this.state;
    this.props.singupUser({ email, password });
    e.preventDefault();
  }
  
  handleFormValues({ target: { name, value } }) {
    this.setState((prevState) => {
      let formData = prevState.formData;
      formData = { ...formData, [name]: value };
      return { ...prevState, formData }
    });
  }
  
  handleConfirmedPasswordTouch(e) {
    this.setState({ isConfirmedPasswordFieldTouched: true })
  }
  
  comparePasswords({ target }) {
    const { formData: { password } } = this.state;
    const isPasswordsEqual = password === target.value;
    this.setState({ isPasswordsEqual });
    
  }
  
  //TODO: Need to add validation pure react or using Formik
  render() {
    const {
      formData: { email, password },
      isPasswordsEqual,
      isConfirmedPasswordFieldTouched
    } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <h3>Registration Form</h3>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email"
                 className="form-control"
                 id="exampleInputEmail1"
                 aria-describedby="emailHelp"
                 placeholder="Enter email"
                 value={email}
                 onChange={this.handleFormValues}
                 name="email"
          />
          <small id="emailHelp"
                 className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password"
                 className="form-control"
                 id="password"
                 placeholder="Enter password"
                 value={password}
                 onChange={this.handleFormValues}
                 name="password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm password</label>
          <input
            type="password"
            className="form-control"
            id="confirm-password"
            placeholder="Password confirmation"
            onChange={this.comparePasswords}
            onFocus={this.handleConfirmedPasswordTouch}
          />
        </div>
        {!isPasswordsEqual && password && <div className="alert alert-danger" role="alert">
          Passwords aren't match! :(
        </div>}
        {isPasswordsEqual && isConfirmedPasswordFieldTouched && password &&
        <div className="alert alert-success" role="alert">
          Passwords match now!
        </div>}
        
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}