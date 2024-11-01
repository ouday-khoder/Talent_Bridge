package com.ouday.talent_bridge_backend.rest;

import com.ouday.talent_bridge_backend.entity.Freelancer;
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



}
