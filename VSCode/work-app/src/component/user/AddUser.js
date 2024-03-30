import React, { Component } from 'react';
import axios from 'axios';

export default class AddUser extends Component {
  // 建構式
  constructor(props) {
    super(props);
    // 定義初始狀態
    this.state = {
      name: '',
      username: '',
      password: '',
      email: '',
      address: '',
      telephone: '',
      errorMessage: '', //錯誤訊息
      registrationSuccess: false // 追蹤註冊是否成功
    };
  }
  // 更新狀態
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
      errorMessage: ''
    });
  }
  // 信箱驗證
  validateEmail = (email) => {
    // 正則表達式
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  // 送出表單
  handleSubmit = (e) => {
    // 阻止表單默認
    e.preventDefault();
    const { name, username, password, email, address, telephone } = this.state;

    // 表單內容驗證
    if (!name || !username || !password || !email || !address || !telephone) {
      this.setState({ errorMessage: '所有空格都是必填的' });
      return;
    }

    if (!this.validateEmail(email)) {
      this.setState({ errorMessage: '請輸入有效的電子郵件地址' });
      return;
    }

    const data = {
      name: name,
      username: username,
      password: password,
      email: email,
      address: address,
      telephone: telephone
    };
    // 將表單數據傳送至後端
    axios.post("http://192.168.0.14:8080/user/add", data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log(response.data);
        // 設置註冊狀態為true
        this.setState({ registrationSuccess: true });
        setTimeout(() => {
          // 一段時間後跳轉回首頁
          window.location.href = "/App.js";

        }, 2000); // 2秒後跳轉
      })
      .catch(error => {
        if (error.response) {
          if (error.response.status === 409) {
            this.setState({ errorMessage: '用戶名或密碼重複' });
          } else {
            this.setState({ errorMessage: '發生錯誤，請稍後再試' });
          }
        } else if (error.request) {
          console.log('No response received from the server');
        } else {
          console.log('Error sending the request:', error.message);
        }
      });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="row mb-3">
            <div className="col-6">
              <h4 className="modal-title">註冊會員</h4>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="name">姓名</label>
            <input type="text" className="form-control" id="name" placeholder="請輸入姓名" onChange={this.handleChange}></input>
          </div>
          <div className="mb-3">
            <label htmlFor="username">帳號</label>
            <input type="text" className="form-control" id="username" placeholder="請輸入帳號" onChange={this.handleChange}></input>
          </div>
          <div className="mb-3">
            <label htmlFor="password">密碼</label>
            <input type="password" className="form-control" id="password" placeholder="請輸入密碼" onChange={this.handleChange}></input>
          </div>
          <div className="mb-3">
            <label htmlFor="email">電子郵件</label>
            <input type="email" className="form-control" id="email" placeholder="name123@example.com" onChange={this.handleChange}></input>
          </div>
          <div className="mb-3">
            <label htmlFor="address">地址</label>
            <input type="text" className="form-control" id="address" placeholder="請輸入地址" onChange={this.handleChange}></input>
          </div>
          <div className="mb-4">
            <label htmlFor="telephone">電話號碼</label>
            <input type="tel" className="form-control" id="telephone" placeholder="0900 123 456" onChange={this.handleChange}></input>
          </div>
          
          {/* 提是重複錯誤 */}
          {this.state.errorMessage && <div className="alert alert-danger" role="alert">
            {this.state.errorMessage}
          </div>}

          {/* 提示註冊成功 */}
          {this.state.registrationSuccess && <div className="alert alert-success" role="alert">
            註冊成功，將在幾秒後跳轉回首面
          </div>}

          <div className="d-flex justify-content-end">
            <input type="reset" className="btn btn-outline-danger me-2" value="重新輸入"></input>
            <input type="submit" className="btn btn-outline-success" value="建立會員"></input>
          </div>
        </form>
      </div>
    );
  }
}
