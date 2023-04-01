package com.skilldistillery.diy.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.diy.entities.Project;
import com.skilldistillery.diy.services.ProjectService;

@RestController
@RequestMapping("api")
public class ProjectController {
	
	@Autowired
	private ProjectService projService;
	
	@GetMapping("projects")
	public List<Project> listProjects() {
		return projService.listAllProjects();
	}
	
	@GetMapping("projects/{projId}")
	public Project singleProject(@PathVariable int projId, HttpServletResponse res) {
		Project project = projService.getSingleProject(projId);
		if (project == null) {
			res.setStatus(404);
		}
		return project;
	}
	
	@PostMapping("projects")
	public Project createProject(@RequestBody Project project, HttpServletResponse res, HttpServletRequest req) {
		try {
		project = projService.create(project);
		if (project == null) {
			res.setStatus(404);
		} else {
			res.setStatus(201);
			res.setHeader("Location", req.getRequestURL().append("/").append(project.getId()).toString());
		}
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
			project = null;	
		}
		return project;
	}
	
	@PutMapping("projects/{projId}") 
	public Project singleProject(@PathVariable int projId, @RequestBody Project project, HttpServletResponse res) {
		try {
			project = projService.update(projId, project);
			if (project == null) {
				res.setStatus(404);
			} else {
				res.setStatus(200);
			}
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
		}
		return project;
	}
	
	@DeleteMapping("projects/{projId}")
	public void delete(@PathVariable int projId, HttpServletResponse res, HttpServletRequest req){
	 try {
	 if (projService.delete(projId) ) {
		 res.setStatus(204);
		 
	 } else { 
		 res.setStatus(404);
	 }
	} catch (Exception e) {
		e.printStackTrace();
		res.setStatus(400);
	}
	}
	
	

}
