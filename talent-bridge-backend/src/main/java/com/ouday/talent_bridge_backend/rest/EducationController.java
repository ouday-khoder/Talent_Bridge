package com.ouday.talent_bridge_backend.rest;

import com.ouday.talent_bridge_backend.entity.Education;
import com.ouday.talent_bridge_backend.entity.Freelancer;
import com.ouday.talent_bridge_backend.repository.EducationRepository;
import com.ouday.talent_bridge_backend.service.FreelancerServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class EducationController {


    @Autowired
    private FreelancerServiceInterface freelancerServiceInterface;

    @Autowired
    private EducationRepository educationRepository;

    // Get education by freelancer ID
    @GetMapping("/freelancers/{freelancerId}/educations")
    public List<Education> getEducationsByFreelancerId(@PathVariable int freelancerId) {
        Freelancer freelancer = freelancerServiceInterface.findById(freelancerId);

        if (freelancer == null) {
            throw new RuntimeException("Freelancer not found");
        }

        return freelancer.getEducationList();
    }

    // add a single education
    @PostMapping("/freelancers/{freelancerId}/educations")
    public Education addEducation(@PathVariable int freelancerId, @RequestBody Education education) {
        Freelancer freelancer = freelancerServiceInterface.findById(freelancerId);

        if (freelancer == null) {
            throw new RuntimeException("Freelancer not found");
        }

        education.setFreelancer(freelancer);
        return educationRepository.save(education);
    }
    
    @PostMapping("/freelancers/{freelancerId}/test-educations")
    public Freelancer addEducationsToFreelancer(@PathVariable int freelancerId, @RequestBody List<Education> educations) {
        Freelancer freelancer = freelancerServiceInterface.findById(freelancerId);

        if (freelancer == null) {
            throw new RuntimeException("Freelancer not found");
        }

        for (Education education : educations) {
            education.setFreelancer(freelancer);
            educationRepository.save(education);
            freelancer.getEducationList().add(education);
        }

        freelancerServiceInterface.save(freelancer);

        return freelancer;
    }


}
