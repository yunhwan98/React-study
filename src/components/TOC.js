import React, { Component } from 'react';

//component를 파일단위로 분리
class TOC extends Component{
  render(){
    console.log('TOC render');
    var lists = [];
    var data =this.props.data;
    var i=0;
    while(i < data.length){
      lists.push(
      <li key={data[i].id}>
        <a 
          href={"/content/"+data[i].id}
          data-id={data[i].id}
          onClick={function(e){
            e.preventDefault();
            this.props.onChangePage(e.target.dataset.id);//target.dataset.id를 통해 값을 추출
          }.bind(this)}
          >{data[i].title}</a>
      </li>);
      i = i+1;
    }
    return(
      <nav>
        <ul>
          {lists}

        </ul>
      </nav>
    );

  }
}


export default TOC;
//TOC라는 class를 가져다 사용가능하게