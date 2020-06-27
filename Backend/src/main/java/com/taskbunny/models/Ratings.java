package com.taskbunny.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="ratings")
public class Ratings implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ratingsid")
	private int ratingsid;
	
	@Column(name = "clientid")
	private int clientid;
	
	@Column(name = "providerid")
	private int providerid;
	
	@Column(name = "feedback")
	private String feedback;
	
	@Column(name = "ratings")
	private int ratings;
	
	public Ratings() {}

	public Ratings(int ratingsid, int clientid, int providerid, String feedback, int ratings) {
		super();
		this.ratingsid = ratingsid;
		this.clientid = clientid;
		this.providerid = providerid;
		this.feedback = feedback;
		this.ratings = ratings;
	}
	
	public Ratings(int clientid, int providerid, String feedback, int ratings) {
		super();
		this.clientid = clientid;
		this.providerid = providerid;
		this.feedback = feedback;
		this.ratings = ratings;
	}

	public int getRatingsid() {
		return ratingsid;
	}

	public void setRatingsid(int ratingsid) {
		this.ratingsid = ratingsid;
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

	public String getFeedback() {
		return feedback;
	}

	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}

	public int getRatings() {
		return ratings;
	}

	public void setRatings(int ratings) {
		this.ratings = ratings;
	}
	
	
	
}
