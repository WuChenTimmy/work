// FloatingCart.js

import React, { Component } from 'react';

class FloatingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      total: 0
    };
  }

  componentDidMount() {
    this.fetchCartItems();
  }

  fetchCartItems() {
    // 假設後端 API 的端點為 '/cart/{userId}'，userId 需要替換為實際的用戶 ID
    fetch("/cart")
      .then(response => response.json())
      .then(data => {
        this.setState({ cartItems: data });
        // 計算總價格
        const total = data.reduce((acc, item) => acc + item.quantity * item.price, 0);
        this.setState({ total });
      })
      .catch(error => console.error('Error fetching cart items:', error));
  }

  render() {
    const { cartItems, total } = this.state;

    return (
      <div className="floating-cart">
        <button className="floating-cart-icon">
          <i className="fas fa-shopping-cart"></i>
        </button>
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <span>{item.name}</span>
              <span>{item.quantity}</span>
            </div>
          ))}
        </div>
        <div className="cart-total">
          Total: {total}
        </div>
      </div>
    );
  }
}

export default FloatingCart;
