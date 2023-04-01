package com.skilldistillery.diy.services;

import java.util.List;

import com.skilldistillery.diy.entities.Project;

public interface ProjectService {

	List<Project> listAllProjects();
	Project getSingleProject(int projectId);
	Project create(Project project);
	Project update(int projectId, Project project);
	boolean delete(int projectId);
}
