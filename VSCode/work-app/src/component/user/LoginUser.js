import React, { Component } from 'react';
import axios from 'axios';

export default class LoginUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errorMessage: '',
      successMessage: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;

    const data = {
      username: username,
      password: password
    };

    // 清除錯誤訊息
    this.setState({ errorMessage: '' });

    axios.post("http://192.168.0.14:8080/user/login", data)
      .then(response => {
        if (response.data) {
          console.log("登入成功");
          // 登入成功後跳轉到首頁
          this.setState({ successMessage: '登入成功，即將跳轉到首頁' });
          setTimeout(() => {
            window.location.href = "/App.js"; // 將 "/" 更換為首頁路由
          }, 2000); // 2秒後跳轉
        } else {
          console.log("登入失敗:", response.data.message);
          this.setState({ errorMessage: response.data.message });
        }
      })
      .catch(error => {
        console.log('錯誤:', error.message);
        if (error.response && error.response.status === 401) {
          this.setState({ errorMessage: '帳號或密碼輸入錯誤' });
        } else {
          this.setState({ errorMessage: '無法連接到伺服器' });
        }
      });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="row mb-3">
            <div className="col-6">
              <h4 className="modal-title" id="loginLabel">登入會員</h4>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
          </div>
    
          <div className="mb-3">
            <label htmlFor="username" className="form-label">帳號</label>
            <input type="text" className="form-control" id="username" placeholder="請輸入帳號" onChange={this.handleChange} />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label">密碼</label>
            <input type="password" className="form-control" id="password" placeholder="請輸入密碼" onChange={this.handleChange} />
          </div>
    
          {/* 提示錯誤訊息 */}
          {this.state.errorMessage && <div className="alert alert-danger" role="alert">
            {this.state.errorMessage}
          </div>}

          {/* 提示成功訊息 */}
          {this.state.successMessage && <div className="alert alert-success" role="alert">
            {this.state.successMessage}
          </div>}
    
          <div className="d-flex justify-content-end">
            <input type="reset" className="btn btn-outline-danger me-2" value="重新輸入"></input>
            <input type="submit" className="btn btn-outline-success" value="登入會員"></input>
          </div>
        </form>
      </div>
    );
  }
}
