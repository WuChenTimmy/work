package com.example.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.example.demo.vo.CartItem;

@Mapper
public interface CartMapper {
	// 新增商品到購物車
    @Insert("INSERT INTO cart (user_id, product_id, quantity) VALUES (#{userId}, #{productId}, #{quantity})")
    void addToCart(CartItem cartItem);

    // 從購物車中移除商品
    @Delete("DELETE FROM cart WHERE cart_id = #{cartId}")
    void removeFromCart(Integer cartId);

    // 獲取用戶的購物車內容
    @Select("SELECT * FROM cart WHERE user_id = #{userId}")
    List<CartItem> getCartItems(Integer userId);
}
