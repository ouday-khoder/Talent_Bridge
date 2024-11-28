package com.ouday.talent_bridge_backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.time.LocalDate;

@Entity
public class ApplyProject {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int id;

    private int proposalRate;

    private LocalDate deliveryDate;

    public ApplyProject() {
    }

    public ApplyProject(int proposalRate, LocalDate deliveryDate) {
        this.proposalRate = proposalRate;
        this.deliveryDate = deliveryDate;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getProposalRate() {
        return proposalRate;
    }

    public void setProposalRate(int proposalRate) {
        this.proposalRate = proposalRate;
    }

    public LocalDate getDeliveryDate() {
        return deliveryDate;
    }

    public void setDeliveryDate(LocalDate deliveryDate) {
        this.deliveryDate = deliveryDate;
    }

    @Override
    public String toString() {
        return "ApplyProject{" +
                "id=" + id +
                ", proposalRate=" + proposalRate +
                ", deliveryDate=" + deliveryDate +
                '}';
    }
}
