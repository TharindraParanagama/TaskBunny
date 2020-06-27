package com.taskbunny.models;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="banktransfers")
public class BankTransfers implements Serializable{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "bankid", unique = true, nullable = false)
	private int bankid;
	
	@Column(name = "clientid")
	private int clientid;
	
	@Column(name = "providerid")
	private int providerid;
	
	@Column(name = "taskid")
	private int taskid;
	
	@Column(name = "amountpaid")
	private double amountpaid;
	
	public BankTransfers() {}

	public BankTransfers(int bankid, int clientid, int providerid, int taskid, double amountpaid) {
		super();
		this.bankid = bankid;
		this.clientid = clientid;
		this.providerid = providerid;
		this.taskid = taskid;
		this.amountpaid = amountpaid;
	}

	public int getBankid() {
		return bankid;
	}

	public void setBankid(int bankid) {
		this.bankid = bankid;
	}

	public int getClientid() {
		return clientid;
	}

	public void setClientid(int clientid) {
		this.clientid = clientid;
	}

	public int getProviderid() {
		return providerid;
	}

	public void setProviderid(int providerid) {
		this.providerid = providerid;
	}

	public int getTaskid() {
		return taskid;
	}

	public void setTaskid(int taskid) {
		this.taskid = taskid;
	}

	public double getAmountpaid() {
		return amountpaid;
	}

	public void setAmountpaid(double amountpaid) {
		this.amountpaid = amountpaid;
	}

	
}
