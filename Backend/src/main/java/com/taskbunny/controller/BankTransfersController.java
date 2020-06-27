package com.taskbunny.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.taskbunny.models.BankTransfers;
import com.taskbunny.models.Users;
import com.taskbunny.service.BankTransfersService;

@Controller
@ResponseBody
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class BankTransfersController {

		@Autowired
		BankTransfersService bts;
		
		@GetMapping("/banktransfers")
		public List<BankTransfers> getAllBankTransfers(){
			return bts.findAll();
		}
	
		@PostMapping("/banktransfers")
		public BankTransfers postBankTransfers(@RequestBody BankTransfers bt) {
			bts.saveBankTransfers(bt);
			return bt;
			
		}
		@GetMapping("/banktransfers/TransferDetails/{bankid}")
		public String getTranferDetails(@PathVariable("bankid") int bankid){
			return bts.getTransferDetails(bankid);
		}
}
