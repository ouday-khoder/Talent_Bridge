package com.ouday.talent_bridge_backend.service;

import com.ouday.talent_bridge_backend.entity.BidProject;

import java.util.List;

public interface BidProjectServiceInterface {

    BidProject saveBidProject (BidProject bidProject);

    List<BidProject> getAllBidProjects();

    BidProject findBidProjectById(int theId);

    void deleteBidProjectById(int theId);

    void deleteAllBidProjects();
}
