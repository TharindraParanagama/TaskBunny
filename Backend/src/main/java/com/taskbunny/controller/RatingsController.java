package com.taskbunny.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.taskbunny.models.Ratings;
import com.taskbunny.service.RatingsService;

@Controller
@ResponseBody
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class RatingsController {
	
	@Autowired
	RatingsService rs;
	
	@GetMapping("/ratings")
	public List<Ratings> getAllRatings(){
		return rs.findAll();
	}
	
	@PostMapping("/ratings")
	public Ratings postRatings(@RequestBody Ratings ratings) {
		rs.saveRatings(ratings);
		return ratings;
	}
	
}
