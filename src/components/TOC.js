import React, { Component } from 'react';

//component를 파일단위로 분리
class TOC extends Component{
  render(){
    return(
      <nav>
        <ul>
          <li><a href="1.html">HTML</a></li>
          <li><a href="2.html">CSS</a></li>
          <li><a href="3.html">JavaScript</a></li>

        </ul>
      </nav>
    );

  }
}


export default TOC;
//TOC라는 class를 가져다 사용가능하게