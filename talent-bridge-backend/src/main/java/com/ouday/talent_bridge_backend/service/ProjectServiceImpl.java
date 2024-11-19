package com.ouday.talent_bridge_backend.service;

import com.ouday.talent_bridge_backend.entity.FixedProject;
import com.ouday.talent_bridge_backend.repository.FixedRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectServiceImpl implements ProjectServiceInterface {

    private final FixedRepository fixedRepository;

    public ProjectServiceImpl(FixedRepository fixedRepository) {
        this.fixedRepository = fixedRepository;
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


}
