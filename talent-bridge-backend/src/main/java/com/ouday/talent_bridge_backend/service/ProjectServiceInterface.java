package com.ouday.talent_bridge_backend.service;

import com.ouday.talent_bridge_backend.entity.FixedProject;

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
}
