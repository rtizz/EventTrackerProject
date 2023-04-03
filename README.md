# EventTrackerProject - LOADED ON AWS

## Description
This project tracks all projects around respective properties by logging work to be done, diy cabable or outsource, as well as cost and schedule analysis. 

01April2023<br>
As of this README this program only allow basic CRUD operations through REST APIs.

## Code Breakout
The project is broken into two projects and a database<br>
1. JPADiyProject: This holds the entities and respective mapping & tests
2. DIYProject: This is the Boot side which holds the repositories, services/impl, and controllers. 
3. MySql DB holding two tables which are mapped by the entities in the JPA project <br>
--- a. Projects - Decription of projects to be done around property<br>
--- b. Locations - List of locations correlated to property.<br>

The repositiories and services hold similar format for the data it is mapped to. 
1. Repositories - interface - extends JpaRepository. Used to place custom queries and mitigating needs for optionals.
2. Service - interface - holds signatures to be implemented by impl.
3. ServiceImpl - holds logic for respective CRUD operations. Calls back to repository(1) via autowire mapping.
4. Controller - @RestController/RequestMapping("api") - Calls back to method logic in ServiceImpl through autowiring Service object. <br>
Within the Controllers for each entity hold the same method functionality. The following are the respective methods and their REST route URIs <br>
### Project
| HTTP Verb | URI                  | Request Body | Response Body |
|-----------|----------------------|--------------|---------------|
| GET       | `/api/projects`      |              | Collection of representations of all _locations_ resources |collection** endpoint |
| GET       | `/api/projects/2`   |              | Representation of _locations_ `2` |
| POST      | `/api/projects`      | Representation of a new _location_ resource | Description of the result of the operation | **
| PUT       | `/api/projects/#`   | Representation of a new version of _location_ `#` |
| DELETE    | `/api/projects/#`   |              | |

### Location 
| HTTP Verb | URI                  | Request Body | Response Body |
|-----------|----------------------|--------------|---------------|
| GET       | `/api/locations`      |              | Collection of representations of all _locations_ resources |collection** endpoint |
| GET       | `/api/locations/16`   |              | Representation of _locations_ `16` |
| POST      | `/api/locations`      | Representation of a new _location_ resource | Description of the result of the operation | **
| PUT       | `/api/locations/#`   | Representation of a new version of _location_ `#` |
| DELETE    | `/api/locations/#`   |              | |

The following is a code breakout of locations. Pojects is almost identical but with different naming convention.
1. listAll - get
```java
	@GetMapping("locations")
	public List<Location> listLocations() {
		return locService.listAllLocations();
	}
```
2. listOne - get
```java
	@GetMapping("locations/{locId}")
	public Location singleLocation(@PathVariable int locId, HttpServletResponse res) {
		Location location = locService.getSingleLocation(locId);
		if (location == null) {
			res.setStatus(404);
		}
		return location;
	}
```
3. create - post 
```java
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
```
4. update - put
```java
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
```
5. delete - delete
```java
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
```
The respective controller method maps to the front end and passes the data to the ServiceImpl to conduct the logic and return the data. 
<br>
<br>
Lastly there is an additional directory named postmanTests which holds the JSON test file to be imported locally and tested if desired. 

## Tools Used
1. JPA
2. Spring Boot
3. MySQL workbench / SQL
4. Postman 
5. Git/CLI
6. Eclipse

## Lessons Learned
1. I need to become more familiar with Options. As simple as they seem the relationship between the repository and the imple kept messing with me. 
2. Validate you are using the correct mapping. I accidentally had post instead of put and that hung me up. 
3. Sometimes eclipse will generate setters and no getters. This was thankfully resolved quickly but something to look out for. 
4. When using booleans, Eclipse modified the setter to "is...". This cause more confusion than anticipated. 
