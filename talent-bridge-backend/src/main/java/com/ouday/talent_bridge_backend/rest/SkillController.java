package com.ouday.talent_bridge_backend.rest;

import com.ouday.talent_bridge_backend.entity.Freelancer;
import com.ouday.talent_bridge_backend.entity.Skill;
import com.ouday.talent_bridge_backend.repository.SkillRepository;
import com.ouday.talent_bridge_backend.service.FreelancerServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class SkillController {

    @Autowired
    private FreelancerServiceInterface freelancerServiceInterface;

    @Autowired
    private SkillRepository skillRepository;


    @PostMapping("/skills")
    public Skill addSkill(@RequestBody Skill skill) {
        return skillRepository.save(skill); // The ID will be generated automatically
    }

    // get skills by freelancerId
    @GetMapping("/freelancers/{freelancerId}/skills")
    public List<Skill> getSkillsByFreelancerId(@PathVariable int freelancerId) {
        Freelancer freelancer = freelancerServiceInterface.findById(freelancerId);

        if (freelancer == null) {
            System.out.println("Freelancer not found with ID: " + freelancerId);
            return new ArrayList<>();
        }

        System.out.println("Freelancer found: " + freelancer.getFirstName());
        System.out.println("Skills: " + freelancer.getSkills());

        return freelancer.getSkills();

    }

    // add a skill to a freelancer

    @PostMapping("/freelancers/{freelancerId}/skills")
    public Freelancer addSkillsToFreelancer(@PathVariable int freelancerId, @RequestBody List<String> skills) {
        Freelancer freelancer = freelancerServiceInterface.findById(freelancerId);

        if (freelancer == null) {
            throw new RuntimeException("Freelancer not found");
        }

        for (String skillName : skills) {
            Skill skill = new Skill();
            skill.setName(skillName);
            skillRepository.save(skill);
            freelancer.getSkills().add(skill);
        }

        freelancerServiceInterface.save(freelancer);

        return freelancer;
    }

    // Endpoint to delete a skill from a freelancer
    @DeleteMapping("/freelancers/{freelancerId}/skills/{skillId}")
    public String deleteSkillById(@PathVariable int freelancerId, @PathVariable int skillId) {

        freelancerServiceInterface.removeSkillFromFreelancer(freelancerId, skillId);

        return "Skill with ID " + skillId + " removed from freelancer with ID " + freelancerId;
    }



}
