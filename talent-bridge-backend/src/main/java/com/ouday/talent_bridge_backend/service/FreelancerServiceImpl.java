package com.ouday.talent_bridge_backend.service;

import com.ouday.talent_bridge_backend.entity.Freelancer;
import com.ouday.talent_bridge_backend.entity.Skill;
import com.ouday.talent_bridge_backend.repository.FreelancerRepository;
import com.ouday.talent_bridge_backend.repository.SkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FreelancerServiceImpl implements FreelancerServiceInterface {

    @Autowired
    private FreelancerRepository freelancerRepository;

    @Autowired
    private SkillRepository skillRepository;

    @Autowired
    public FreelancerServiceImpl(FreelancerRepository theFreelancerRepository) {
        freelancerRepository = theFreelancerRepository;
    }

    @Override
    public List<Freelancer> findAll() {
        return freelancerRepository.findAll();
    }

    @Override
    public Freelancer save(Freelancer theFreelancer) {
        return freelancerRepository.save(theFreelancer);
    }
    @Override
    public Freelancer findById(int theId) {
        Optional<Freelancer> result = freelancerRepository.findById(theId);

        Freelancer theFreelancer = null;

        if (result.isPresent()) {
            theFreelancer = result.get();
        } else {
            throw new RuntimeException("Did not found freelancer id - " + theId);
        }
        return theFreelancer;
    }

    @Override
    public void deleteById(int theId) {
        freelancerRepository.deleteById(theId);
    }

    @Override
    public void deleteAll() {
        freelancerRepository.deleteAll();
    }

    // skill code

    @Override
    public Skill addSkill(Skill skill) {
        return skillRepository.save(skill);
    }

    // New method to add skill to a freelancer
    public Freelancer addSkillToFreelancer(int freelancerId, Skill skill) {
        Freelancer freelancer = freelancerRepository.findById(freelancerId)
                .orElseThrow(() -> new RuntimeException("Freelancer not found"));

        // Check skill before adding
        System.out.println("Skill before adding: " + skill.getName());


        freelancer.getSkills().add(skill);
        skillRepository.save(skill);  // Save the skill entity
        freelancerRepository.save(freelancer);  // Save the updated freelancer with the new skill
        return freelancer;
    }

    @Override
    public void removeSkillFromFreelancer(int freelancerId, int skillId) {
        Freelancer freelancer = freelancerRepository.findById(freelancerId)
                .orElseThrow(() -> new RuntimeException("Freelancer not found with ID - " + freelancerId));

        // Find and remove the skill
        Skill skillToRemove = freelancer.getSkills().stream()
                .filter(skill -> skill.getId() == skillId)
                .findFirst()
                .orElseThrow(() -> new RuntimeException("Skill not found with ID - " + skillId));

        freelancer.getSkills().remove(skillToRemove);
        freelancerRepository.save(freelancer);  // Save the updated freelancer
    }


}
