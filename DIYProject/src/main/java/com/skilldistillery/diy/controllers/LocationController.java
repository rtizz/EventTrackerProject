package com.skilldistillery.diy.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.diy.entities.Location;
import com.skilldistillery.diy.services.LocationService;

@RestController
@RequestMapping("api")
@CrossOrigin({ "*", "http://localhost/" })
public class LocationController {

	@Autowired
	private LocationService locService;
	
	@GetMapping("locations")
	public List<Location> listLocations() {
		return locService.listAllLocations();
	}
	
	@GetMapping("locations/{locId}")
	public Location singleLocation(@PathVariable int locId, HttpServletResponse res) {
		Location location = locService.getSingleLocation(locId);
		if (location == null) {
			res.setStatus(404);
		}
		return location;
	}
	
	
	@PostMapping("locations")
	public Location createLocation(@RequestBody Location location, HttpServletResponse res, HttpServletRequest req) {
		try {
		location = locService.create(location);
		if (location == null) {
			res.setStatus(404);
		} else {
			res.setStatus(201);
			res.setHeader("Location", req.getRequestURL().append("/").append(location.getId()).toString());
		}
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
			location = null;	
		}
		return location;
	}
	
	
	@PutMapping("locations/{locId}")
	public Location updateLocation(@PathVariable int locId, @RequestBody Location location, HttpServletResponse res) {
		try {
			location = locService.update(locId, location);
			if (location == null) {
				res.setStatus(404);
			} else {
				res.setStatus(200);
			}
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
		}
		return location;
	}
	
	
	@DeleteMapping("locations/{locId}")
	public void deleteLocation(@PathVariable int locId, HttpServletResponse res, HttpServletRequest req){
	 try {
	 if (locService.delete(locId) ) {
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
