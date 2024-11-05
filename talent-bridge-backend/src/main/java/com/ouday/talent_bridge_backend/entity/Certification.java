package com.ouday.talent_bridge_backend.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "certifications")
public class Certification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "issuedOrganization")
    private String issuedOrganization;

    @Column(name = "issuedDate")
    private LocalDate issuedDate;

    @Column(name = "description2")
    private String description2;

    @ManyToOne
    @JoinColumn(name = "freelancer_id")
    @JsonBackReference
    private Freelancer freelancer;


    public Certification() {
    }

    public Certification(String name, String issuedOrganization, LocalDate issuedDate, String description2, Freelancer freelancer) {
        this.name = name;
        this.issuedOrganization = issuedOrganization;
        this.issuedDate = issuedDate;
        this.description2 = description2;
        this.freelancer = freelancer;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIssuedOrganization() {
        return issuedOrganization;
    }

    public void setIssuedOrganization(String issuedOrganization) {
        this.issuedOrganization = issuedOrganization;
    }

    public LocalDate getIssuedDate() {
        return issuedDate;
    }

    public void setIssuedDate(LocalDate issuedDate) {
        this.issuedDate = issuedDate;
    }

    public String getDescription2() {
        return description2;
    }

    public void setDescription2(String description2) {
        this.description2 = description2;
    }

    public Freelancer getFreelancer() {
        return freelancer;
    }

    public void setFreelancer(Freelancer freelancer) {
        this.freelancer = freelancer;
    }

    @Override
    public String toString() {
        return "Certification{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", issuedOrganization='" + issuedOrganization + '\'' +
                ", issuedDate=" + issuedDate +
                ", description2='" + description2 + '\'' +
                '}';
    }

}
