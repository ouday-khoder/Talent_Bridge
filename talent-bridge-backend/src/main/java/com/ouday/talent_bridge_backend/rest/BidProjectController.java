package com.ouday.talent_bridge_backend.rest;

import com.ouday.talent_bridge_backend.entity.BidProject;
import com.ouday.talent_bridge_backend.service.BidProjectServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class BidProjectController {

    @Autowired
    private BidProjectServiceInterface bidProjectServiceInterface;

    @GetMapping("/bidProjects")
    public List<BidProject> getAllBidProjects() {
        return bidProjectServiceInterface.getAllBidProjects();
    }

    @GetMapping("/bidProjects/{bidProjectId}")
    public BidProject findBidProjectById(@PathVariable int bidProjectId) {
        BidProject theBidProject = bidProjectServiceInterface.findBidProjectById(bidProjectId);

        if(theBidProject == null) {
            throw new RuntimeException("Bid project id is not found - " + bidProjectId);
        }
        return theBidProject;
    }

    @PostMapping("/bidProjects")
    public BidProject submitBidProject(@RequestBody BidProject bidProject) {
        bidProject.setId(0);
        return bidProjectServiceInterface.saveBidProject(bidProject);
    }

    @DeleteMapping("/bidProjects/{bidProjectId}")
    public String deleteBidProjectById(@PathVariable int bidProjectId) {
        BidProject tempBidProject = bidProjectServiceInterface.findBidProjectById(bidProjectId);

        if(tempBidProject == null) {
            throw new RuntimeException("Bid project id is not found - " + bidProjectId);
        }
        bidProjectServiceInterface.deleteBidProjectById(bidProjectId);

        return "deleted bid project - " + bidProjectId;
    }

    @DeleteMapping("/bidProjects")
    public String deleteAllBidProjects() {
        bidProjectServiceInterface.deleteAllBidProjects();
        return "All bid projects are deleted ";
    }

}
