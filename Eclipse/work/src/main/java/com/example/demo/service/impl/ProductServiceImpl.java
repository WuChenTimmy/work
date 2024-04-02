package com.example.demo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.mapper.ProductMapper;
import com.example.demo.service.ProductService;
import com.example.demo.vo.Product;

@Service
public class ProductServiceImpl implements ProductService {
	// 自動注入
	@Autowired
	private ProductMapper pm;
	
	@Override
	public List<Product> getAllProducts() {
		return pm.getAllProducts();
	}

}
