package com.example.demo.service;

import java.util.List;

import com.example.demo.vo.User;

public interface UserService {
	// create
	void addUser(User user);
	
	// read
	User login(String username,String password);
	boolean usernameExist(String username);
	List<User> queryAllUsers();
	
	// update
	
	// delete
	
}
