package com.ouday.talent_bridge_backend.rest;

import com.ouday.talent_bridge_backend.entity.Freelancer;
import com.ouday.talent_bridge_backend.entity.Profile;
import com.ouday.talent_bridge_backend.service.FreelancerServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class FreelancerController {

    @Autowired
    private FreelancerServiceInterface freelancerServiceInterface;

    @GetMapping("/freelancers")
    public List<Freelancer> findAll() {
        return freelancerServiceInterface.findAll();
    }

    @GetMapping("/freelancers/{freelancerId}")
    public Freelancer getFreelancerById(@PathVariable int freelancerId) {
        Freelancer theFreelancer = freelancerServiceInterface.findById(freelancerId);

        if(theFreelancer == null) {
            throw new RuntimeException("freelancer id not found - " + freelancerId);
        }
        return theFreelancer;
    }

    @PostMapping("/freelancers")
    public Freelancer addFreelancer(@RequestBody Freelancer theFreelancer) {
        theFreelancer.setId(0);

        Freelancer dbFreelancer = freelancerServiceInterface.save(theFreelancer);

        return dbFreelancer;
    }

    @PostMapping("/freelancers/profile/{freelancerId}")
    public Freelancer ClientProfile(@PathVariable int freelancerId, @RequestBody Profile profile) {
        Freelancer freelancer = freelancerServiceInterface.findById(freelancerId);

        if(freelancer == null) {
            throw new RuntimeException("freelancer id not found - " + freelancerId);
        }
        // Update freelancer with profile information
        freelancer.setCountry(profile.getCountry());
        freelancer.setCity(profile.getCity());
        freelancer.setStreet(profile.getStreet());
        freelancer.setPostCode(profile.getPostCode());
        freelancer.setDateOfBirth(profile.getDateOfBirth());
        freelancer.setGender(profile.getGender());
        freelancer.setJobTitle(profile.getJobTitle());
        freelancer.setPhoneNumber(profile.getPhoneNumber());
        freelancer.setBio(profile.getBio());
        freelancer.setHourlyRate(profile.getHourlyRate());

        freelancerServiceInterface.save(freelancer);

        return freelancer;
    }



}
