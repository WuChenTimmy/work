import React, { Component } from 'react';

class ShoppingCart extends Component {
  render() {
    const { cartItems, removeFromCart, updateQuantity } = this.props;

    return (
      <div className="shopping-cart">
        <h2>購物車</h2>
        {cartItems.length === 0 ? (
          <p>購物車是空的</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <span>{item.name}</span>
                <span>數量: {item.quantity}</span>
                <button onClick={() => updateQuantity(index, item.quantity - 1)}>-</button>
                <button onClick={() => updateQuantity(index, item.quantity + 1)}>+</button>
                <button onClick={() => removeFromCart(index)}>移除</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default ShoppingCart;
