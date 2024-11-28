package com.ouday.talent_bridge_backend.service;

import com.ouday.talent_bridge_backend.entity.ApplyProject;
import com.ouday.talent_bridge_backend.repository.ApplyProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApplyProjectServiceImpl implements ApplyProjectServiceInterface{

    @Autowired
    private ApplyProjectRepository applyProjectRepository;

    @Override
    public ApplyProject saveApplyProject(ApplyProject applyProject) {

        applyProject.setId(0);

        return applyProjectRepository.save(applyProject);
    }

    @Override
    public List<ApplyProject> getAllApplyProjects() {
        return applyProjectRepository.findAll();
    }

    @Override
    public ApplyProject findApplyProjectById(int theId) {
        return applyProjectRepository.findById(theId).orElseThrow(() ->
                new RuntimeException("Apply project id not found"));
    }
    @Override
    public void deleteApplyProjectById(int theId) {
        applyProjectRepository.deleteById(theId);
    }
    @Override
    public void deleteAllApplyProjects() {
        applyProjectRepository.deleteAll();
    }

}
