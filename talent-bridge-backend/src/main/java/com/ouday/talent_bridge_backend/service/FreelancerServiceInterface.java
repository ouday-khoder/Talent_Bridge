package com.ouday.talent_bridge_backend.service;

import com.ouday.talent_bridge_backend.entity.Freelancer;

import java.util.List;

public interface FreelancerServiceInterface {

    List<Freelancer> findAll();

    Freelancer findById(int theId);
    Freelancer save(Freelancer theFreelancer);
}
