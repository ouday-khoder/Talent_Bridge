package com.ouday.talent_bridge_backend.repository;

import com.ouday.talent_bridge_backend.entity.Freelancer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FreelancerRepository extends JpaRepository<Freelancer, Integer> {
    Freelancer findByEmail(String email);
}
