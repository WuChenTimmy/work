import React, { Component } from 'react'
import AddUser from '../user/AddUser'
import LoginUser from '../user/LoginUser'

export default class Header extends Component {
  render() {
    return (
      <div className="container">
        {/* 上下邊距離3 */}
        <div className="py-3">
          {/* 新增一行 */}
          <div className="row">
            {/* 定義一個列且佔行的一半寬度，放置於左側 */}
            <div className="col-6 d-flex align-items-center">
              {/* 掛入圖片 右側間距為1單位 圖片尺寸樣式 */}
              <img src="images/logo2.png" className="me-1" style={{ width: '50px', height: '50px'}} alt="LOGO"></img>
              {/* 文字2倍大小 連結為深色 連結下劃線為透明 */}
              <a href="/App.js" className="fs-2 link-dark link-underline-opacity-0">食在好方便</a>
            </div>
            {/* 定義一個列且佔行的一半寬度，使用Flex彈性布局 靠右對齊 垂直方向置中對齊*/}
            <div className="col-6 d-flex justify-content-end align-items-center">
              
              {/* 註冊 Outline按鈕樣式 右側間距為2單位 */}
              <button type="button" className="btn btn-outline-dark me-2" data-bs-toggle="modal" data-bs-target="#register">註冊</button>
              {/* 模態框 */}
              <div className="modal fade" id="register" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="registerLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-body">
                      <AddUser/>
                    </div>
                  </div>
                </div>
              </div>
              {/* 登入 Outline按鈕樣式 */}
              <button type="button" className="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#login">登入</button>
              {/* 模態框 */}
              <div className="modal fade" id="login" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="loginLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-body">
                      <LoginUser/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}