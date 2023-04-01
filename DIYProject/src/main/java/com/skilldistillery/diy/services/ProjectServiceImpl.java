package com.skilldistillery.diy.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.diy.entities.Location;
import com.skilldistillery.diy.entities.Project;
import com.skilldistillery.diy.repositories.ProjectRepository;

@Service
public class ProjectServiceImpl implements ProjectService{
	
	@Autowired
	private ProjectRepository projRepo;

	@Override
	public List<Project> listAllProjects() {
		return projRepo.findAll();
	}

	@Override
	public Project getSingleProject(int projectId) {
		return projRepo.findById(projectId);
	}

	@Override
	public Project create(Project project) {
		if (project.getTask() == null) {
			project.setTask("Default");
		}
		if (project.getLocation() == null) {
			Location location = new Location();
			location.setId(20);
			project.setLocation(location);
		}
		return projRepo.saveAndFlush(project);
	}

	@Override
	public Project update(int projectId, Project project) {
		Project updateProject = projRepo.findById(projectId);
		updateProject.setTask(project.getTask());
		updateProject.setDescription(project.getDescription());
		updateProject.setDiy(project.isDiy());
		updateProject.setInterior(project.isInterior());
		updateProject.setEstCost(project.getEstCost());
		updateProject.setActualCost(project.getActualCost());
		updateProject.setDateEnter(project.getDateEnter());
		updateProject.setDateStart(project.getDateStart());
		updateProject.setDateFinish(project.getDateFinish());
		updateProject.setLocation(project.getLocation());
		projRepo.saveAndFlush(updateProject);
		return updateProject;
	}

	@Override
	public boolean delete(int projectId) {
		boolean deleted = true;
		projRepo.deleteById(projectId);
		if (projRepo.findById(projectId) == null) {
			return deleted;
		} else {
		return false;
		}
	}
	
	

}
