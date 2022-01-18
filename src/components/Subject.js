import React, { Component } from 'react';

class Subject extends Component{
  render(){
    console.log('Subject render');
    return(
    //props 적용(리팩토링)
    <header>
      <h1><a href="/">{this.props.title}</a></h1>
      {this.props.sub}
    </header>
    );

  }
}

export default Subject;