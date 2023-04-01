package com.skilldistillery.diy.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class LocationTest {
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Location loc;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("JPADiyProject");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		loc = em.find(Location.class, 14);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		loc = null;
	}

	@Test
	void test_Location() {
		assertNotNull(loc);
		assertEquals("Back Yard", loc.getName());
	}
	
	@Test
	void test_Location_Project_Mapping() {
		assertNotNull(loc.getProjects());
		assertFalse(loc.getProjects().size() == 0);
	}

}
