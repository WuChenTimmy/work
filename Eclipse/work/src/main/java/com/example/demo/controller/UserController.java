package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.UserService;
import com.example.demo.vo.User;

// 允許跨域請求
@CrossOrigin(origins="*")
// Spring MVC控制器
@RestController
// 指定URL路徑
@RequestMapping("/user")
public class UserController {
	// 自動注入
	@Autowired
    private UserService userService;

    @PostMapping("/add")
    public ResponseEntity<String> addUser(@RequestBody User user) {
        userService.addUser(user);
        return ResponseEntity.ok("建檔成功");
    }
    
    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User user) {
        User loggedInUser = userService.login(user.getUsername(), user.getPassword());
        if (loggedInUser != null) {
            return ResponseEntity.ok(loggedInUser);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
    
//    @GetMapping("/login")
////  public User login(@RequestParam String username, @RequestParam String password) {
////      return usi.login(username, password);
////  }
	
//	@PostMapping("/add")
//	public void addUser(@RequestParam String username, @RequestParam String password,
//            @RequestParam String name, @RequestParam String email,
//            @RequestParam String address, @RequestParam String telephone) {
//		User user = new User(username, password, name, email, address, telephone);
//		usi.addUser(user);
//	}
	
//	@GetMapping("/login")
//    public User login(@RequestParam String username, @RequestParam String password) {
//        return usi.login(username, password);
//    }
//	
//	@GetMapping("/checkUsername")
//    public boolean checkUsername(@RequestParam String username) {
//        return usi.usernameExist(username);
//    }
//	
//	@GetMapping("/queryAll")
//	public List<User> getAllUsers() {
//		return usi.queryAllUsers();
//	}
}