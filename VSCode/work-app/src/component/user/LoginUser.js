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

    axios.post("http://192.168.0.105:8080/user/login", data)
      .then(response => {
        if (response.data) {
          console.log("登入成功");
          // 登入成功後更新父組件中的用戶名
          this.props.onLoginSuccess(response.data.name);
          // 登入成功後關閉登入模態框
          document.getElementById('loginCloseButton').click();
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
              {/* 按鈕ID為loginCloseButton，用於關閉模態框 */}
              <button id="loginCloseButton" type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
    
          <div className="d-flex justify-content-end">
            <input type="reset" className="btn btn-outline-danger me-2" value="重新輸入"></input>
            <input type="submit" className="btn btn-outline-success" value="登入會員"></input>
          </div>
        </form>
      </div>
    );
  }
}
