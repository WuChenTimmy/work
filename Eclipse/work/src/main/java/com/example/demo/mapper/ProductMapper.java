package com.example.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.example.demo.vo.Product;

@Mapper
public interface ProductMapper {
	@Select("SELECT * FROM product")
    List<Product> getAllProducts();
}
