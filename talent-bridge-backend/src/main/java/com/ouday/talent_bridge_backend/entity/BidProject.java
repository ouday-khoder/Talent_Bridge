package com.ouday.talent_bridge_backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.time.LocalDate;

@Entity
public class BidProject {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private LocalDate deliveryDate;

    private int bidAmount;

    private String proposal;

    public BidProject() {
    }

    public BidProject(LocalDate deliveryDate, int bidAmount, String proposal) {
        this.deliveryDate = deliveryDate;
        this.bidAmount = bidAmount;
        this.proposal = proposal;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public LocalDate getDeliveryDate() {
        return deliveryDate;
    }

    public void setDeliveryDate(LocalDate deliveryDate) {
        this.deliveryDate = deliveryDate;
    }

    public int getBidAmount() {
        return bidAmount;
    }

    public void setBidAmount(int bidAmount) {
        this.bidAmount = bidAmount;
    }

    public String getProposal() {
        return proposal;
    }

    public void setProposal(String proposal) {
        this.proposal = proposal;
    }


    @Override
    public String toString() {
        return "BidProject{" +
                "id=" + id +
                ", deliveryDate=" + deliveryDate +
                ", bidAmount=" + bidAmount +
                '}';
    }
}
