package com.taskbunny.controller;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.taskbunny.models.AuthenticationRequest;
import com.taskbunny.models.AuthenticationResponse;
import com.taskbunny.models.Tasks;
import com.taskbunny.models.Users;
import com.taskbunny.service.MyUserDetailsService;
import com.taskbunny.service.UsersService;
import com.taskbunny.util.JwtUtil;


@RestController
@ResponseBody
@CrossOrigin(origins = "http://localhost:3000")
public class UsersController {
	
	@Autowired
	UsersService us;
	
	@Autowired
	private JwtUtil jwtTokenUtil;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private MyUserDetailsService userDetailsService;
		
	@GetMapping("/users")
	public List<Users> getAllUsers(){
		return us.findAll();		
	}
	
	@GetMapping("/usersbyrole")
	public Collection<Users> filter(){
		return us.filter();		
	}
	
	

	@GetMapping("/users/{id}")
	public Optional<Users> getOneUser(@PathVariable("id") int id){
		return us.getByUserID(id);
	}
	
	@GetMapping("/users/GetProvideName/{providerid}")
	public List<String> getProviderName(@PathVariable("providerid") int providerid){
		return us.getProviderName(providerid);
	}
	
	@GetMapping("/role/{username}")
	public String getUserRoleByUsername(@PathVariable("username") String username){
		return us.getUserRoleByUsername(username);
	}
	
	@GetMapping("/users/userByname/{username}")
	public Collection<String> getProviderIDByUsername(@PathVariable("username") String username){
		return us.getProviderIDByUserName(username);
	}
	
	@GetMapping("/users/userBynameClient/{username}")
	public Collection<String> getUserIDByUsername(@PathVariable("username") String username){
		return us.getUserIDByUserName(username);
	}
	
	@GetMapping("/providerDetails/{providerid}")
	public List<String> getProviderDetailsByID(@PathVariable("providerid") int providerid){
		return us.getProviderDetailsByID(providerid);
	}
	
	@GetMapping("/users/getClientDetails/{username}")
	public Collection<Users> getClientDetails(@PathVariable("username") String username){
		return us.getClientDetails(username);
	}
	
	@GetMapping("/getFirstName/{username}")
	public String getFirstName(@PathVariable("username") String username){
		return us.getFirstName(username);
	}
	

	@PostMapping("/usersregister")
	public Users postUsers(@RequestBody Users users) {
		us.saveUser(users);
		return users;
	}
	
	
	@PutMapping("/users/update/{userid}")
	public void updateUserbyId(@PathVariable("userid") int userid,@RequestBody Users user){
		
		 us.updateUserbyId(userid,user.getUsername(),user.getPassword(),user.getRole(),user.getFirstname(),user.getLastname());
		 System.out.println(userid + user.getUsername() + user.getPassword() + user.getRole() + user.getFirstname() + user.getLastname());
		 
	}
	
	@DeleteMapping("/deleteuser/{userid}")
	public void deleteByUserID(@PathVariable("userid") int id){
		us.deleteByUserID(id);
	}
	
	@RequestMapping(value="/authenticate", method=RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest)throws Exception{
		
		try {
		authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword())
				);
		}catch(BadCredentialsException e){
			throw new Exception("Incorrect username or password", e);
		}
		
		final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
		
		final String jwt = jwtTokenUtil.generateToken(userDetails);
		
		return ResponseEntity.ok(new AuthenticationResponse(jwt));
		
	}
	@PutMapping("/user/{id}")
	public void updatePicture(@PathVariable("id") int id,@RequestBody Users user){
		
		 us.setPicture(id,user.getPicture());
		
	}
	
}
