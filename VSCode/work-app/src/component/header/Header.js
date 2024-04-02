import React, { Component } from 'react';
import AddUser from '../user/AddUser';
import LoginUser from '../user/LoginUser';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      username: ''
    };
  }

  // 當登入成功時的回調函數
  handleLoginSuccess = (username) => {
    this.setState({
      isLoggedIn: true,
      username: username
    });
  }

  // 登出功能
  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      username: ''
    });
  }

  render() {
    const { isLoggedIn, username } = this.state;

    return (
      <div className="container">
        <div className="py-3">
          <div className="row">
            <div className="col-6 d-flex align-items-center">
              <img src="images/logo2.png" className="me-1" style={{ width: '50px', height: '50px'}} alt="LOGO"></img>
              <a href="/App.js" className="fs-2 link-dark link-underline-opacity-0">食在好方便</a>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              {/* 如果已登入，顯示用戶名及登出按鈕 */}
              {isLoggedIn ? (
                <div>
                  <button type="button" className="btn btn-info me-2" onClick="#">會員：{username}</button>
                  <button type="button" className="btn btn-outline-dark" onClick={this.handleLogout}>登出</button>
                </div>
              ) : (
                // 如果未登入，顯示註冊及登入按鈕
                <div>
                  <button type="button" className="btn btn-outline-dark me-2" data-bs-toggle="modal" data-bs-target="#register">註冊</button>
                  <div className="modal fade" id="register" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="registerLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-body">
                          <AddUser />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type="button" className="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#login">登入</button>
                  <div className="modal fade" id="login" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="loginLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-body">
                          {/* 將handleLoginSuccess函數作為props傳遞給LoginUser組件 */}
                          <LoginUser onLoginSuccess={this.handleLoginSuccess} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
