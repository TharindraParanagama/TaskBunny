package com.taskbunny.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.taskbunny.models.Users;
import com.taskbunny.repository.UsersRepository;

@Service
public class MyUserDetailsService implements UserDetailsService{

	@Autowired
	private UsersRepository usersRepository;

	@Override
	public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
		
		Optional<Users> users = usersRepository.findByUserName(userName);
		
		users.orElseThrow( ()->new UsernameNotFoundException("Not found: "+userName) );
		
		System.out.println(users.map(MyUserDetails::new).get());
		
		return users.map(MyUserDetails::new).get();
	}
	
	
	
}
