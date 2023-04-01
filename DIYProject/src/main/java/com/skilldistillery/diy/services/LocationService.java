package com.skilldistillery.diy.services;

import java.util.List;

import com.skilldistillery.diy.entities.Location;

public interface LocationService {
	
	List<Location> listAllLocations();
	Location getSingleLocation(int locationId);
	Location create(Location location);
	Location update(int locationId, Location location);
	boolean delete( int locationId);

}
