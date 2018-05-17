import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default function requireAuth(WrappedComponent) {
  class Authentication extends Component {
    
    getAccess() {
      
      return <WrappedComponent {...this.props}/>
    }
    
    // componentWillUpdate(nextProps) {
    //   if (nextProps.authenticated !== this.props.authenticated) {
    //     this.props.history.push('/');
    //   }
    // }
    
    render() {
      const { isLoggedIn } = this.props;
      return (
        <div>
          {isLoggedIn ? this.getAccess() : <Redirect to="/"/>}
        </div>
      )
      
      
    }
  }
  
  const mapStateToProps = (state) => {
    debugger
    return {
      isLoggedIn: state.user.isAuthenticated
    }
  };
  
  return connect(mapStateToProps)(Authentication);
}