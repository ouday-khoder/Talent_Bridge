package com.ouday.talent_bridge_backend.service;

import com.ouday.talent_bridge_backend.entity.ApplyProject;

import java.util.List;

public interface ApplyProjectServiceInterface {
    ApplyProject saveApplyProject(ApplyProject applyProject);

    List<ApplyProject> getAllApplyProjects();

    ApplyProject findApplyProjectById(int theId);

    void deleteApplyProjectById(int theId);

    void deleteAllApplyProjects();
}
