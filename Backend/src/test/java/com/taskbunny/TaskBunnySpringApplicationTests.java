package com.taskbunny;
import org.springframework.beans.factory.annotation.Autowired;
import static org.assertj.core.api.Assertions.assertThat;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.taskbunny.controller.BankTransfersController;
import com.taskbunny.controller.RatingsController;
import com.taskbunny.controller.TasksController;
import com.taskbunny.controller.UsersController;

@SpringBootTest
class TaskBunnySpringApplicationTests {
	
	@Autowired
	private TasksController TController;
	@Autowired
	private UsersController UController;
	@Autowired
	private RatingsController RController;
	@Autowired
	private BankTransfersController BTController;

	@Test
	void TaskscontextLoads() throws Exception {
		assertThat(TController).isNotNull();
	}
	@Test
	void UserscontextLoads() throws Exception {
		assertThat(UController).isNotNull();
	}
	@Test
	void RatingscontextLoads() throws Exception {
		assertThat(RController).isNotNull();
	}
	@Test
	void BankTransferscontextLoads() throws Exception {
		assertThat(BTController).isNotNull();
	}
	

}
