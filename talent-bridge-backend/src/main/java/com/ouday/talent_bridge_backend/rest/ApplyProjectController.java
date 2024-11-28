package com.ouday.talent_bridge_backend.rest;

import com.ouday.talent_bridge_backend.entity.ApplyProject;
import com.ouday.talent_bridge_backend.service.ApplyProjectServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ApplyProjectController {

    @Autowired
    private ApplyProjectServiceInterface applyProjectServiceInterface;

    @GetMapping("/applyProjects")
    public List<ApplyProject> getAllApplyProjects() {
        return applyProjectServiceInterface.getAllApplyProjects();
    }

    @GetMapping("/applyProjects/{applyProjectId}")
    public ApplyProject findApplyProjectById(@PathVariable int applyProjectId) {
        ApplyProject theApplyProject = applyProjectServiceInterface.findApplyProjectById(applyProjectId);

        if(theApplyProject == null) {
            throw new RuntimeException("Apply project id is not found - " + applyProjectId);
        }
        return theApplyProject;
    }

    @PostMapping("/applyProjects")
    public ApplyProject submitApplyProject(@RequestBody ApplyProject applyProject) {
        applyProject.setId(0);
        return applyProjectServiceInterface.saveApplyProject(applyProject);
    }

    @DeleteMapping("/applyProjects/{applyProjectId}")
    public String deleteApplyProjectById(@PathVariable int applyProjectId) {
        ApplyProject tempApplyProject = applyProjectServiceInterface.findApplyProjectById(applyProjectId);

        if(tempApplyProject == null) {
            throw new RuntimeException("Apply project id is not found - " + applyProjectId);
        }
        applyProjectServiceInterface.deleteApplyProjectById(applyProjectId);

        return "deleted apply project - " + applyProjectId;
    }

    @DeleteMapping("/applyProjects")
    public String deleteAllApplyProjects() {
        applyProjectServiceInterface.deleteAllApplyProjects();

        return "All apply projects are deleted - ";
    }
}
