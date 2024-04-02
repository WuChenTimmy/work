package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.CartService;
import com.example.demo.vo.CartItem;

//允許跨域請求
@CrossOrigin(origins="*")
//Spring MVC控制器
@RestController
//指定URL路徑
@RequestMapping("/cart")
public class CartController {
	// 自動注入
	@Autowired
	private CartService cartService;
	
	@PostMapping("/add")
    public ResponseEntity<String> addToCart(@RequestBody CartItem cartItem) {
		cartService.addToCart(cartItem);
        return ResponseEntity.ok("商品已加入購物車");
    }

    @DeleteMapping("/removeCartId")
    public ResponseEntity<String> removeFromCart(@PathVariable Integer cartId) {
    	cartService.removeFromCart(cartId);
        return ResponseEntity.ok("商品已從購物車中移除");
    }

    @GetMapping("/userId")
    public ResponseEntity<List<CartItem>> getCartItems(@PathVariable Integer userId) {
        List<CartItem> cartItems = cartService.getCartItems(userId);
        return ResponseEntity.ok(cartItems);
    }
}
