package com.taskbunny.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.taskbunny.models.BankTransfers;
import com.taskbunny.models.Tasks;

public interface BankTransfersRepository extends JpaRepository<BankTransfers, Integer>{
	
	@Query
	(value = "SELECT firstname FROM Users JOIN Tasks ON Users.userid=Tasks.provicerid  WHERE Users.userid = :providerid",nativeQuery = true)
	String getTransferDetails(int providerid);

}
