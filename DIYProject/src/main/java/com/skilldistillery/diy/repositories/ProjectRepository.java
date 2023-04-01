package com.skilldistillery.diy.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.diy.entities.Project;

public interface ProjectRepository extends JpaRepository<Project, Integer>{

	List<Project> findAll();
	Project findById(int projectId);

}
