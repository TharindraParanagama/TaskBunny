package com.taskbunny;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.taskbunny.repository.UsersRepository;

import com.taskbunny.controller.TasksController;

@SpringBootApplication
@EnableJpaRepositories(basePackageClasses = UsersRepository.class)
public class TaskBunnySpringApplication {
	
	private static final Logger logger=LoggerFactory.getLogger(TaskBunnySpringApplication.class);
	
	public static void main(String[] args) {
		SpringApplication.run(TaskBunnySpringApplication.class, args);
		logger.info("App is Running Smoothly");
	}

}
