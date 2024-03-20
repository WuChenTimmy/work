import React, { Component } from 'react'
import AddUser from './AddUser'
import QueryAllUser from './QueryAllUser'

export default class UserContent extends Component {
  render() {
    return (
      <div className="container">
     
        <ul className="nav nav-pills" id="myTab">
          <li className="nav-item"><a className="nav-link active" data-bs-toggle="tab" href="#tab1">點心</a></li>
          <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#tab2">點心</a></li>
          <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#tab3">水果</a></li>
          <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#tab4">null</a></li>
          <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#tab5">null</a></li>
          <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#tab6">null</a></li>
        </ul>
        
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="tab1"><p>留言資料</p></div>
          <div className="tab-pane fade" id="tab2"><p><AddUser/></p></div>
          <div className="tab-pane fade" id="tab3"><p><QueryAllUser/></p></div>
        </div>
      </div>
    )
  }
}
