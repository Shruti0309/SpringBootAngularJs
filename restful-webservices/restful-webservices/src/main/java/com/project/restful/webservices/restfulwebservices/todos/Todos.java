package com.project.restful.webservices.restfulwebservices.todos;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity 
public class Todos {
	
	@Id
	@GeneratedValue
	public Long id;
	public String username;
	public String description;
	public Date targetDate;
	public boolean completionStatus;
	
	protected Todos() {}
	
	public Todos(Long id, String username, String description, Date targetDate, boolean completionStatus) {
		super();
		this.id = id;
		this.username = username;
		this.description = description;
		this.targetDate = targetDate;
		this.completionStatus = completionStatus;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getTargetDate() {
		return targetDate;
	}

	public void setTargetDate(Date targetDate) {
		this.targetDate = targetDate;
	}

	public boolean isCompletionStatus() {
		return completionStatus;
	}

	public void setCompletionStatus(boolean completionStatus) {
		this.completionStatus = completionStatus;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (id ^ (id >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Todos other = (Todos) obj;
		if (id != other.id)
			return false;
		return true;
	}

	
	
}
