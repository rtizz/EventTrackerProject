package com.skilldistillery.diy.entities;

import java.time.LocalDate;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Project {
	
	public Project() {}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String task;
	
	private String description;
	
	private boolean diy;
	
	private boolean interior;
	
	@Column(name="est_cost")
	private Double estCost;
	
	@Column(name="actual_cost")
	private Double actualCost;
	
	@Column(name="date_entered")
	private LocalDate dateEnter;
	
	@Column(name="date_started")
	private LocalDate dateStart;
	
	@Column(name="date_finished")
	private LocalDate dateFinish;
	
	@ManyToOne
	@JoinColumn(name="location_id")
	private Location location;
	
	public Location getLocation() {
		return location;
	}

	public void setLocation(Location location) {
		this.location = location;
	}



	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTask() {
		return task;
	}

	public void setTask(String task) {
		this.task = task;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public void setDiy(boolean diy) {
		this.diy = diy;
	}
	


	public boolean isDiy() {
		return diy;
	}

	public void setInterior(boolean interior) {
		this.interior = interior;
	}
	

	public boolean isInterior() {
		return interior;
	}

	public Double getEstCost() {
		return estCost;
	}

	public void setEstCost(Double estCost) {
		this.estCost = estCost;
	}

	public Double getActualCost() {
		return actualCost;
	}

	public void setActualCost(Double actualCost) {
		this.actualCost = actualCost;
	}

	public LocalDate getDateEnter() {
		return dateEnter;
	}

	public void setDateEnter(LocalDate dateEnter) {
		this.dateEnter = dateEnter;
	}

	public LocalDate getDateStart() {
		return dateStart;
	}

	public void setDateStart(LocalDate dateStart) {
		this.dateStart = dateStart;
	}

	public LocalDate getDateFinish() {
		return dateFinish;
	}

	public void setDateFinish(LocalDate dateFinish) {
		this.dateFinish = dateFinish;
	}


	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Project other = (Project) obj;
		return id == other.id;
	}

	@Override
	public String toString() {
		return "Project [id=" + id + ", task=" + task + ", description=" + description + ", diy=" + diy + ", interior="
				+ interior + ", estCost=" + estCost + ", actualCost=" + actualCost + ", dateEnter=" + dateEnter
				+ ", dateStart=" + dateStart + ", dateFinish=" + dateFinish + ", location=" + location + "]";
	}
	
	
}
