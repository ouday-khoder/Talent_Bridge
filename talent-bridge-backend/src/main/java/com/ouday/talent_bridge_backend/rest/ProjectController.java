package com.ouday.talent_bridge_backend.rest;

import com.ouday.talent_bridge_backend.entity.FixedProject;
import com.ouday.talent_bridge_backend.service.ProjectServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ProjectController {


    @Autowired
    private ProjectServiceInterface projectServiceInterface;

    // Fixed fields
    @GetMapping("/fixedProjects")
    public List<FixedProject> getAllFixedProjects() {
        return projectServiceInterface.getAllFixedProjects();
    }

    @GetMapping("/fixedProjects/{fixedProjectId}")
    public FixedProject getFixedProjectById(@PathVariable int fixedProjectId) {
        FixedProject theFixedProject = projectServiceInterface.findFixedProjectById(fixedProjectId);
        if (theFixedProject == null) {
            throw new RuntimeException("Project id is not found - " + fixedProjectId);
        }
        return theFixedProject;
    }

    @PostMapping("/fixedProjects")
    public FixedProject submitFixedProject(@RequestBody FixedProject theFixedProject) {

        theFixedProject.setType("fixed");

        return projectServiceInterface.saveFixedProject(theFixedProject);
    }


    @DeleteMapping("/fixedProjects/{fixedProjectId}")
    public String deleteFixedProjectById(@PathVariable int fixedProjectId) {
        if (projectServiceInterface.findFixedProjectById(fixedProjectId) == null) {
            throw new RuntimeException("Fixed project not found - " + fixedProjectId);
        }
        projectServiceInterface.deleteFixedProjectById(fixedProjectId);
        return "Deleted fixed project - " + fixedProjectId;
    }

    @DeleteMapping("/fixedProjects")
    public String deleteAllFixedProjects() {
        projectServiceInterface.deleteAllFixedProjects();
        return "All fixed projects are deleted";
    }


}
