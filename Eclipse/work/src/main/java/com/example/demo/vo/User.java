package com.example.demo.vo;

import lombok.Data;

@Data
public class User {
	private Integer uid;
	private String username;
	private String password;
	private String name;
	private String email;
	private String address;
	private String telephone;
	
	public User(String username, String password, String name, String email, String address, String telephone) {
		super();
		this.username = username;
		this.password = password;
		this.name = name;
		this.email = email;
		this.address = address;
		this.telephone = telephone;
	}

	public User() {
		super();
	}
}
