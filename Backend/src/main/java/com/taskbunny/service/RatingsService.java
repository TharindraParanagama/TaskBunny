package com.taskbunny.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.taskbunny.models.Ratings;
import com.taskbunny.repository.RatingsRepository;

@Service
public class RatingsService {

	@Autowired
	RatingsRepository rr;
	
	public void saveRatings(Ratings r) {
		rr.save(r);
	}
	
	public List<Ratings> findAll(){
		return rr.findAll();
	}
	
}
