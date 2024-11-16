package com.ouday.talent_bridge_backend.rest;

import com.ouday.talent_bridge_backend.entity.Client;
import com.ouday.talent_bridge_backend.entity.Freelancer;
import com.ouday.talent_bridge_backend.entity.JsonWebResponse;
import com.ouday.talent_bridge_backend.entity.LoginRequest;
import com.ouday.talent_bridge_backend.service.ClientServiceInterface;
import com.ouday.talent_bridge_backend.service.FreelancerServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {
    @Autowired
    private ClientServiceInterface clientServiceInterface;

    @Autowired
    private FreelancerServiceInterface freelancerServiceInterface;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {
        // login as client
        Client client = clientServiceInterface.findByEmail(loginRequest.getEmail());
        if (client != null && client.getPassword().equals(loginRequest.getPassword())) {
            return ResponseEntity.ok(new JsonWebResponse("dummy-client-token", "client"));
        }

        // login as freelancer
        Freelancer freelancer = freelancerServiceInterface.findByEmail(loginRequest.getEmail());
        if (freelancer != null && freelancer.getPassword().equals(loginRequest.getPassword())) {
            return ResponseEntity.ok(new JsonWebResponse("dummy-freelancer-token", "freelancer"));
        }

        // if login failed
        return ResponseEntity.status(401).body("Invalid email or password.");
    }
}
