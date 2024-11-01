package com.ouday.talent_bridge_backend.service;

import com.ouday.talent_bridge_backend.entity.Freelancer;
import com.ouday.talent_bridge_backend.repository.FreelancerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FreelancerServiceImpl implements FreelancerServiceInterface {

    @Autowired
    private FreelancerRepository freelancerRepository;

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

}
