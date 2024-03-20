package com.example.demo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.mapper.UserMapper;
import com.example.demo.service.UserService;
import com.example.demo.vo.User;

@Service
public class UserServiceImpl implements UserService {
	// 自動注入
	@Autowired
	private UserMapper um;
	
	// 實作方法
	@Override
	public void addUser(User user) {
		um.addUser(user);
	}
	
	@Override
	public User login(String username, String password) {
		return um.login(username, password);
	}
	
	@Override
	public boolean usernameExist(String username) {
	    return um.queryUsername(username) != null;
	}

	@Override
	public List<User> queryAllUsers() {
		return um.getAllUsers();
	}
}