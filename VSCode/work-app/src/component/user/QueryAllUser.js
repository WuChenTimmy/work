import React, { Component } from 'react'
import axios from 'axios'

export default class QueryAllUser extends Component {
  render() {
    return (
      <div>
        <button onClick={this.queryAllUser.bind(this)}>查詢</button>
        <div id="show"></div>
      </div>
    )
  }

  queryAllUser(e) {
    e.preventDefault();
    const x=axios.get("http://192.168.0.109:8080/user/queryAllUser"); // XMLHttpRequest
    let y="";
    let sum=0;
    x.then(response=>{
        let y="<table border=1 align=center width=70%>";

        for(let i=0; i<response.data.length; i++){
            y=y+"<tr><td>"+response.data[i].uid+
                    "<td>"+response.data[i].username+
                    "<td>"+response.data[i].password+
                    "<td>"+response.data[i].name+
                    "<td>"+response.data[i].email+
                    "<td>"+response.data[i].address+
                    "<td>"+response.data[i].telephone;
            sum++;
            console.log(sum);
        }
        y=y+"</table>";
        let s=document.getElementById("show");

        s.innerHTML=y+"<br/>共："+sum+"筆";
    });
  }
}
