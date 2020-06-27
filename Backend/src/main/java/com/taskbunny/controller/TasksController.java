package com.taskbunny.controller;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.taskbunny.TaskBunnySpringApplication;
import com.taskbunny.models.Tasks;
import com.taskbunny.service.TasksService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TasksController {
	
	private static final Logger logger=LoggerFactory.getLogger(TasksController.class);
	
	@Autowired
	TasksService ts;
	
	@GetMapping("/tasks")
	public List<Tasks> findAllTask(){
		logger.info("A GET REQUEST was made to /task");
		return ts.findAll();
	}
	
	@DeleteMapping("/deletetask/{taskid}")
	public void deleteByTaskID(@PathVariable("taskid") int id){
		ts.deleteByTaskID(id);
	}
	
	@GetMapping("/task/{id}")
	public Optional<Tasks> getOneTask(@PathVariable("id") int id){
		return ts.getByTaskID(id);
	}
	
	@PostMapping("/tasks")
	public Tasks postTasks(@RequestBody Tasks tasks) {
		ts.saveTask(tasks);
		return tasks;
	}
	
	@GetMapping("/tasks/totalEarnings/{providerid}")
	public double getTotalEarnings(@PathVariable("providerid") int providerid){
		return ts.computeEarnings(providerid);
	}
	
	@GetMapping("/tasks/totaltasks/{providerid}")
	public int getTotalTasksForAProvider(@PathVariable("providerid") int providerid){
		return ts.getTotalTasksForAProvider(providerid);
	}
	
	
	@GetMapping("/tasks/{category}")
	public Collection<Tasks> getByCategory(@PathVariable("category") String category){
		return ts.findByCategory(category);
	}
	

	
	@GetMapping("/tasks/client/{clientid}")
	public Collection<Tasks> getTaskByClientID(@PathVariable("clientid") int clientid){
		return ts.findByClientID(clientid);
	}
	
	
	@GetMapping("/tasks/provider/{providerid}")
	public Collection<Tasks> getTaskByProviderID(@PathVariable("providerid") int providerid){
		return ts.findByProviderID(providerid);
	}
	
	@GetMapping("/users/providerTasks/{username}")
	public Collection<Tasks> getProviderTasks(@PathVariable("username") String username){
		return ts.getProviderTasks(username);
	}
	
	
	@PutMapping("/tasks/status/{tasksid}")
	public void updateTaskByTaskID(@PathVariable("tasksid") int tasksid,@RequestBody Tasks tasks){
		
		 ts.updateByStatusTaskID(tasksid,tasks.getStatus());
		
	}
	
	@PutMapping("/tasks/provider/{taskid}")
	public void updateTaskByProviderID(@PathVariable("taskid") int taskid,@RequestBody Tasks tasks){
		
		 ts.setTaskProvidedId(taskid,tasks.getProviderid());
		
	}
	
	@GetMapping("/tasks/mytask/{username}")
	public Collection<Tasks> getTaskByUsername(@PathVariable("username") String username){
		return ts.findByUsername(username);
	}
	
	@GetMapping("/tasks/providerTasks/{username}")
	public Collection<Tasks> getTaskByProvider(@PathVariable("username") String username){
		return ts.getTaskByProvider(username,"pending");
	}
	@GetMapping("/tasks/getFirstName/{username}")
	public String getFirstname(@PathVariable("username") String username){
		return ts.getFirstname(username);
	}
	
}