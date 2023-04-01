package com.skilldistillery.diy.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.diy.entities.Location;
import com.skilldistillery.diy.repositories.LocationRepository;

@Service
public class LocationServiceImpl implements LocationService {
	
	@Autowired
	private LocationRepository locRepo;

	@Override
	public List<Location> listAllLocations() {
		return locRepo.findAll();
	}

	@Override
	public Location getSingleLocation(int locationId) {
		return locRepo.findById(locationId);
	}

	@Override
	public Location create(Location location) {
		if (location.getName() == null) {
			location.setName("home");
		}
		return locRepo.saveAndFlush(location);
	}

	@Override
	public Location update(int locationId, Location location) {
		Location updatedLocation = locRepo.findById(locationId);
		updatedLocation.setName(location.getName());
		locRepo.saveAndFlush(updatedLocation);
		return updatedLocation;
	}

	@Override
	public boolean delete(int locationId) {
		boolean deleted = true;
		locRepo.deleteById(locationId);
		if(locRepo.findById(locationId) == null) {
			return deleted;
		} else {
		return false;
		}
	}

}
