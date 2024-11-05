package com.ouday.talent_bridge_backend.rest;

import com.ouday.talent_bridge_backend.entity.Certification;
import com.ouday.talent_bridge_backend.entity.Freelancer;
import com.ouday.talent_bridge_backend.repository.CertificationRepository;
import com.ouday.talent_bridge_backend.service.FreelancerServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class CertificationController {

    @Autowired
    private FreelancerServiceInterface freelancerServiceInterface;

    @Autowired
    private CertificationRepository certificationRepository;

    @GetMapping("/freelancers/{freelancerId}/certifications")
    public List<Certification> getCertificationByFreelancerId(@PathVariable int freelancerId) {
        Freelancer freelancer = freelancerServiceInterface.findById(freelancerId);

        if(freelancer == null) {
            throw new RuntimeException("Freelancer not found");
        }
        return freelancer.getCertificationList();
    }

    @PostMapping("/freelancers/{freelancerId}/certifications")
    public Certification addCertification(@PathVariable int freelancerId, @RequestBody Certification certification) {

        Freelancer freelancer = freelancerServiceInterface.findById(freelancerId);

        if(freelancer == null) {
            throw new RuntimeException("Freelancer not found");
        }
        certification.setFreelancer(freelancer);
        return certificationRepository.save(certification);
    }

}
