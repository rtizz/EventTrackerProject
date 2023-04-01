# EventTrackerProject

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
Within the Controllers for each entity hold the same method functionality. <br>
1. listAll - get
2. listOne - get
3. create - post
4. update - put
5. delete - delete
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
