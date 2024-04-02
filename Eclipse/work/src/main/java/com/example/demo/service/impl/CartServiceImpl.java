package com.example.demo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.mapper.CartMapper;
import com.example.demo.service.CartService;
import com.example.demo.vo.CartItem;

@Service
public class CartServiceImpl implements CartService {
	// 自動注入
	@Autowired
	private CartMapper cm;
	
	// 實作方法
	@Override
    public void addToCart(CartItem cartItem) {
		cm.addToCart(cartItem);
    }

    @Override
    public void removeFromCart(Integer cartId) {
    	cm.removeFromCart(cartId);
    }

    @Override
    public List<CartItem> getCartItems(Integer userId) {
        return cm.getCartItems(userId);
    }

}
