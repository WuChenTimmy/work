package com.example.demo.vo;

import lombok.Data;

@Data
public class Product {
	private Integer productId;
    private String name;
    private double price;
    private String description;
	
    public Product(String name, double price, String description) {
		super();
		this.name = name;
		this.price = price;
		this.description = description;
	}

	public Product() {
		super();
	}
}
