package com.skilldistillery.diy.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.diy.entities.Location;

public interface LocationRepository extends JpaRepository<Location, Integer> {
	
	List<Location> findAll();
	Location findById(int locationId);
}
