import React, { Component } from 'react';

class Subject extends Component{
  render(){
    return(
    //props 적용(리팩토링)
    <header>
      <h1>{this.props.title}</h1>
      {this.props.sub}
    </header>
    );

  }
}

export default Subject;