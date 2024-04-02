import React, { Component } from 'react';
import Header from './component/header/Header';
import Navigater from './component/navigater/Navigater';
import Content from './component/content/Content';
import Footer from './component/footer/Footer';
import FloatingCart from './component/user/FloatingCart'; // 引入FloatingCart

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="header"><Header/></div>

        <div className="navigater"><Navigater/></div>

        <div className="content"><Content/></div>
        
        <div className="footer"><Footer/></div>

        <FloatingCart cartItems={[]} total={0} /> {/* 將FloatingCart放置在這裡 */}
      </div>
    );
  }
}
