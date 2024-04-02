package com.example.demo.service;

import java.util.List;

import com.example.demo.vo.CartItem;

public interface CartService {
	// create
	void addToCart(CartItem cart);
	
    // read
	List<CartItem> getCartItems(Integer userId);
	
	//update
	
	//delete
	void removeFromCart(Integer cartId);
}
