package com.ouday.talent_bridge_backend.service;

import com.ouday.talent_bridge_backend.entity.BidProject;
import com.ouday.talent_bridge_backend.repository.BidProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BidProjectServiceImpl implements BidProjectServiceInterface{

    @Autowired
    private BidProjectRepository bidProjectRepository;

    @Override
    public BidProject saveBidProject(BidProject bidProject) {
        bidProject.setId(0);

        return bidProjectRepository.save(bidProject);
    }

    @Override
    public List<BidProject> getAllBidProjects () {
        return bidProjectRepository.findAll();
    }

    @Override
    public BidProject findBidProjectById(int theId) {
        return bidProjectRepository.findById(theId).orElseThrow(() ->
                new RuntimeException("Bid project id not found"));
    }

    @Override
    public void deleteBidProjectById(int theId) {
        bidProjectRepository.deleteById(theId);
    }

    @Override
    public void deleteAllBidProjects() {
        bidProjectRepository.deleteAll();
    }


}
