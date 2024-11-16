package com.ouday.talent_bridge_backend.service;

import com.ouday.talent_bridge_backend.entity.*;

import java.util.List;

public interface FreelancerServiceInterface {

    List<Freelancer> findAll();

    Freelancer findById(int theId);
    Freelancer save(Freelancer theFreelancer);

    void deleteById(int theId);

    void deleteAll();


    // method to add skill to a freelancer
    Skill addSkill(Skill skill);


    Freelancer addSkillToFreelancer(int freelancerId, Skill skill);

    void removeSkillFromFreelancer(int freelancerId, int skillId);

    // method to add education to a freelancer

    Education addEducation(Education education);

    Freelancer addEducationToFreelancer(int freelancerId, Education education);


    // certification field

    Certification addCertification(Certification certification);

    Freelancer addCertificationToFreelancer(int freelancerId, Certification certification);

    // article field

    Article addArticle(Article article);

    Freelancer addArticleToFreelancer(int freelancerId, Article article);


    // find freelancers by their email
    Freelancer findByEmail(String email);

}
