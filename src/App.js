import React, { Component } from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import './App.css';

//컴포넌트 사용
class App extends Component{
  constructor(props){
    super(props);
    this.state = {//state 사용
      mode:'read',
      subject:{title:'WEB', sub:'World Wide Web!'},
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      contents:[
          {id:1, title:'HTML', desc:'HTML is HyperText...'},
          {id:2, title:'CSS', desc:'CSS is for design'},
          {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }

  }
  render() {//props나 state변경시 화면이 바뀜
    console.log('App render');
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title =  this.state.welcome.title;
      _desc =  this.state.welcome.desc;
    }else if(this.state.mode === 'read'){

      _title =  this.state.contents[0].title;
      _desc =  this.state.contents[0].desc;
    }
  console.log('render',this);
  return (
    <div className="App">
      <Subject 
        title={this.state.subject.title} 
        sub={this.state.subject.sub}
        onChangePage={function(){//이벤트에 함수설치
          this.setState({mode:'welcome'});
        }.bind(this)}
      >
      </Subject>
      {/* <header>
        <h1><a href="/" onClick={function(e){
          console.log(e);
          e.preventDefault();//기본적인 동작 금지(페이지 전환 방지)
          //this.state.mode = 'welcome';
          this.setState({ //bind(bind는 this 사용가능하게 해줌)와 setState사용(함수형태로 변경) 
            mode:'welcome'
          });
        }.bind(this)}>{this.state.subject.title}</a></h1>
        {this.state.subject.sub}
      </header> */}
      <TOC data={this.state.contents}></TOC>
      <Content title={_title} desc={_desc}></Content>
    </div>
  );
  }
}

export default App;
