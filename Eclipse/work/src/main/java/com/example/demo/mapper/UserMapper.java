package com.example.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.example.demo.vo.CartItem;
import com.example.demo.vo.User;

@Mapper
public interface UserMapper {
	// 新增會員資料至資料庫
	@Insert("insert into user(username,password,name,email,address,telephone)"+"values(#{username},#{password},#{name},#{email},#{address},#{telephone})")
	public void addUser(User user);
	
	// 查詢登入帳密
	@Select("select * from user where username=#{username} and password=#{password}")
	User login(@Param("username") String username, @Param("password") String password);
	
	// 查詢帳號重複
	@Select("select * from user where username=#{username}")
	User queryUsername(String username);
	
	// 查詢所有資料庫的會員資料，按UID升排序降 (asc降序排序)
	@Select("select * from user order by uid asc")
	List<User> getAllUsers();
	
	
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