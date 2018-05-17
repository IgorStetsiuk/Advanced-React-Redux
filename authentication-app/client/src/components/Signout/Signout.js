import React, { Component } from 'react';


export class Signout extends Component {
  
  componentWillMount(){
    this.props.signoutUser();
  }
  
  render() {
    
    return (
      <div>Sorry to see you go...</div>
    )
  }
}