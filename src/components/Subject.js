import React, { Component } from 'react';

class Subject extends Component{
  render(){
    console.log('Subject render');
    return(
    //props 적용(리팩토링)
    <header>
      <h1><a href="/" onClick={function(e){
        e.preventDefault();//페이지 리로드 방지
        this.props.onChangePage();
      }.bind(this)}>{this.props.title}</a></h1>
      {this.props.sub}
    </header>
    );

  }
}

export default Subject;