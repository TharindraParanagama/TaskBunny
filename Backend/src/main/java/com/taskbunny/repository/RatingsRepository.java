package com.taskbunny.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.taskbunny.models.Ratings;

public interface RatingsRepository extends JpaRepository<Ratings, Integer> {

}
