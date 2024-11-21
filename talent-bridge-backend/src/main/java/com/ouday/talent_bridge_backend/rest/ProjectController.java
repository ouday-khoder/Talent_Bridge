package com.ouday.talent_bridge_backend.rest;

import com.ouday.talent_bridge_backend.entity.FixedProject;
import com.ouday.talent_bridge_backend.entity.HourlyProject;
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

    // Hourly fields
    @GetMapping("/hourlyProjects")
    public List<HourlyProject> getAllHourlyProjects() {
        return projectServiceInterface.getAllHourlyProjects();
    }

    @GetMapping("/hourlyProjects/{hourlyProjectId}")
    public HourlyProject getHourlyProjectById(@PathVariable int hourlyProjectId) {
        HourlyProject theHourlyProject = projectServiceInterface.findHourlyProjectById(hourlyProjectId);
        if (theHourlyProject == null) {
            throw new RuntimeException("Project id is not found - " + hourlyProjectId);
        }
        return theHourlyProject;
    }

    @PostMapping("/hourlyProjects")
    public HourlyProject submitHourlyProject(@RequestBody HourlyProject theHourlyProject) {
        theHourlyProject.setId(0);
        theHourlyProject.setType("hourly");
        return projectServiceInterface.saveHourlyProject(theHourlyProject);
    }

    @DeleteMapping("/hourlyProjects/{hourlyProjectId}")
    public String deleteHourlyProjectById(@PathVariable int hourlyProjectId) {
        if (projectServiceInterface.findHourlyProjectById(hourlyProjectId) == null) {
            throw new RuntimeException("Hourly project not found - " + hourlyProjectId);
        }
        projectServiceInterface.deleteHourlyProjectById(hourlyProjectId);
        return "Deleted hourly project - " + hourlyProjectId;
    }

    @DeleteMapping("/hourlyProjects")
    public String deleteAllHourlyProjects() {
        projectServiceInterface.deleteAllHourlyProjects();
        return "All hourly projects are deleted";
    }


}
