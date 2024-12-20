package com.ouday.talent_bridge_backend.service;

import com.ouday.talent_bridge_backend.entity.*;
import com.ouday.talent_bridge_backend.repository.*;
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
    private EducationRepository educationRepository;

    @Autowired
    private CertificationRepository certificationRepository;

    @Autowired
    private ArticleRepository articleRepository;

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

    // add skill to a freelancer
    public Freelancer addSkillToFreelancer(int freelancerId, Skill skill) {
        Freelancer freelancer = freelancerRepository.findById(freelancerId)
                .orElseThrow(() -> new RuntimeException("Freelancer not found"));

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
        freelancerRepository.save(freelancer);
    }

    // education code

    @Override
    public Education addEducation(Education education) {
        return educationRepository.save(education);
    }

    @Override
    public Freelancer addEducationToFreelancer(int freelancerId, Education education) {
        Freelancer freelancer = freelancerRepository.findById(freelancerId)
                .orElseThrow(() -> new RuntimeException("Freelancer not found"));

        freelancer.getEducationList().add(education);
        educationRepository.save(education);
        freelancerRepository.save(freelancer);
        return freelancer;
    }


    // certification code

    @Override
    public Certification addCertification(Certification certification) {
        return certificationRepository.save(certification);
    }

    @Override
    public Freelancer addCertificationToFreelancer(int freelancerId, Certification certification) {
        Freelancer freelancer = freelancerRepository.findById(freelancerId)
                .orElseThrow(() -> new RuntimeException("Freelancer not found"));

        freelancer.getCertificationList().add(certification);
        certificationRepository.save(certification);
        freelancerRepository.save(freelancer);
        return  freelancer;
    }


    // article field

    @Override
    public Article addArticle(Article article) {
        return articleRepository.save(article);
    }

    @Override
    public Freelancer addArticleToFreelancer(int freelancerId, Article article) {
        Freelancer freelancer = freelancerRepository.findById(freelancerId)
                .orElseThrow(() -> new RuntimeException("Freelancer not found"));

        freelancer.getArticleList().add(article);
        articleRepository.save(article);
        freelancerRepository.save(freelancer);
        return  freelancer;
    }


    @Override
    public Freelancer findByEmail(String email) {
        return freelancerRepository.findByEmail(email);
    }



}
