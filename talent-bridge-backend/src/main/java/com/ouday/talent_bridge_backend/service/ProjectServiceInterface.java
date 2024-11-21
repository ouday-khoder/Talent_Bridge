package com.ouday.talent_bridge_backend.service;

import com.ouday.talent_bridge_backend.entity.FixedProject;
import com.ouday.talent_bridge_backend.entity.HourlyProject;

import java.util.List;

public interface ProjectServiceInterface {

    // fixed fields

    // Method to save a Fixed Project
    FixedProject saveFixedProject(FixedProject fixedProject);

    // Method to retrieve all Fixed Projects
    List<FixedProject> getAllFixedProjects();

    // find fixedProject by id
    FixedProject findFixedProjectById(int theId);

    // Method to delete a fixed project
    void deleteFixedProjectById(int theId);

    // delete all fixedProjects;
    void deleteAllFixedProjects();


    // hourly fields

    // Method to save a Hourly Project
    HourlyProject saveHourlyProject(HourlyProject hourlyProject);

    // Method to retrieve all Hourly Projects
    List<HourlyProject> getAllHourlyProjects();

    // find hourlyProject by id
    HourlyProject findHourlyProjectById(int theId);

    // Method to delete a hourly project
    void deleteHourlyProjectById(int theId);

    // delete all hourlyProjects;
    void deleteAllHourlyProjects();
}
