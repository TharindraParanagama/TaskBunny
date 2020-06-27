package com.taskbunny.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.taskbunny.models.BankTransfers;
import com.taskbunny.repository.BankTransfersRepository;

@Service
public class BankTransfersService {

	@Autowired
	BankTransfersRepository btr;
	
	public void saveBankTransfers(BankTransfers bt) {
		btr.save(bt);
	}
	
	public List<BankTransfers> findAll(){
		return btr.findAll();
	}

	public String getTransferDetails(int bankid) {

		return btr.getTransferDetails(bankid);
	}
	
}
