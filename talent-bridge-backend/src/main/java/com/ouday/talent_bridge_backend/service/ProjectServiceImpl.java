package com.ouday.talent_bridge_backend.service;

import com.ouday.talent_bridge_backend.entity.FixedProject;
import com.ouday.talent_bridge_backend.entity.HourlyProject;
import com.ouday.talent_bridge_backend.repository.FixedRepository;
import com.ouday.talent_bridge_backend.repository.HourlyRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProjectServiceImpl implements ProjectServiceInterface {

    private final FixedRepository fixedRepository;
    private final HourlyRepository hourlyRepository;

    public ProjectServiceImpl(FixedRepository fixedRepository, HourlyRepository hourlyRepository) {
        this.fixedRepository = fixedRepository;
        this.hourlyRepository = hourlyRepository;
    }

    // Fixed fields
    @Override
    public FixedProject saveFixedProject(FixedProject fixedProject) {
        fixedProject.setId(0);
        fixedProject.setType("fixed");
        return fixedRepository.save(fixedProject);
    }

    @Override
    public List<FixedProject> getAllFixedProjects() {
        return fixedRepository.findAll();
    }

    @Override
    public FixedProject findFixedProjectById(int theId) {
        return fixedRepository.findById(theId).orElseThrow(() ->
                new RuntimeException("Fixed project id not found"));
    }

    @Override
    public void deleteFixedProjectById(int theId) {
        fixedRepository.deleteById(theId);
    }

    @Override
    public void deleteAllFixedProjects() {
        fixedRepository.deleteAll();
    }

    // Hourly fields
    @Override
    public HourlyProject saveHourlyProject(HourlyProject hourlyProject) {
        hourlyProject.setId(0);
        hourlyProject.setType("hourly");
        return hourlyRepository.save(hourlyProject);
    }

    @Override
    public List<HourlyProject> getAllHourlyProjects() {
        return hourlyRepository.findAll();
    }

    @Override
    public HourlyProject findHourlyProjectById(int theId) {
        return hourlyRepository.findById(theId).orElseThrow(() ->
                new RuntimeException("Hourly project id not found"));
    }

    @Override
    public void deleteHourlyProjectById(int theId) {
        hourlyRepository.deleteById(theId);
    }

    @Override
    public void deleteAllHourlyProjects() {
        hourlyRepository.deleteAll();
    }

    // Get all projects
    public List<Object> getAllProjects() {
        List<Object> allProjects = new ArrayList<>();
        allProjects.addAll(getAllFixedProjects());
        allProjects.addAll(getAllHourlyProjects());

        return allProjects;
    }

    @Override
    public Object findProjectByIdAndType(int projectId, String projectType) {

        if ("fixed".equalsIgnoreCase(projectType)) {
            FixedProject fixedProject = findFixedProjectById(projectId);

            if (fixedProject != null) {
                return fixedProject;
            }
        }

        if("hourly".equalsIgnoreCase(projectType)) {
            HourlyProject hourlyProject = findHourlyProjectById(projectId);
            if (hourlyProject != null) {
                return hourlyProject;
            }
        }

        // if not found
        return null;
    }


}
