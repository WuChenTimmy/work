package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.ProductService;
import com.example.demo.vo.Product;

//允許跨域請求
@CrossOrigin(origins="*")
//Spring MVC控制器
@RestController
//指定URL路徑
@RequestMapping("/product")
public class ProductController {
	// 自動注入
	@Autowired
	private ProductService productService;
	
	@GetMapping("/getAll")
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }
}
