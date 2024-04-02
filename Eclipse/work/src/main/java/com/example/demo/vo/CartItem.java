package com.example.demo.vo;

import lombok.Data;

@Data
public class CartItem {
	private Integer cartId;
    private Integer userId;
    private Integer productId;
    private Integer quantity;
	
    public CartItem(Integer userId, Integer productId, Integer quantity) {
		super();
		this.userId = userId;
		this.productId = productId;
		this.quantity = quantity;
	}

	public CartItem() {
		super();
	}
}
