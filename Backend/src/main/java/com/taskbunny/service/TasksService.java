package com.taskbunny.service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.taskbunny.models.Tasks;
import com.taskbunny.repository.TasksRepository;

@Service
public class TasksService {
	
	@Autowired
	TasksRepository tr;
	
	public void saveTask(Tasks t) {
		tr.save(t);
	}
	
	public List<Tasks> findAll(){
		return tr.findAll();
	}
	
	public Collection<Tasks> findByCategory(String category){
		return tr.findAllTaskCategories(category);
	}
	


	

	public Collection<Tasks> findByClientID(int clientid) {

		return tr.findAllTaskByClientID(clientid);
	}

	public Collection<Tasks> findByProviderID(int providerid) {
	
		return tr.findAllTaskByProviderID(providerid);
	}

	public void updateByStatusTaskID(int tasksid,String status) {
		
		tr.updateStatus(tasksid,status);

	}

	public void setTaskProvidedId(int taskid, int providerid) {
		tr.updateProviderID(taskid,providerid);
		
	}

	public double computeEarnings(int providerid) {
		return tr.totalEarnings(providerid);
	}

	public void deleteByTaskID(int id) {
		
		tr.deleteByTaskID(id);
		
	}

	public Optional<Tasks> getByTaskID(int id) {
		// TODO Auto-generated method stub
		return tr.findById(id);
	}

	public int getTotalTasksForAProvider(int providerid) {
		// TODO Auto-generated method stub
		return tr.getTotalTasksForAProvider(providerid);
	}
	
	public Collection<Tasks> findByUsername(String username) {
		// TODO Auto-generated method stub
		return tr.findByUsername(username);
	}

	public Collection<Tasks> getTaskByClientID(int providerid) {
		// TODO Auto-generated method stub
		return tr.getTaskByClientID(providerid);
	}

	public Collection<Tasks> getTaskByProvider(String username, String status) {
		// TODO Auto-generated method stub
		return tr.getTaskByProvider(username,status);
	}

	public Collection<Tasks> getProviderTasks(String username) {
		// TODO Auto-generated method stub
		return tr.getProviderTasks(username);
	}

	public String getFirstname(String username) {
		// TODO Auto-generated method stub
		return tr.getFirstname(username);
	}

	
	
}