package com.ouday.talent_bridge_backend.entity;

import jakarta.persistence.*;

import java.time.LocalDate;


@Entity
@Table(name = "hourly_project")
public class HourlyProject {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "resourceNumber")
    private String resourceNumber;

    @Column(name = "startDate")
    private LocalDate startDate;

    @Column(name = "duration")
    private int duration;

    @Column(name = "budget")
    private int budget;

    @Column(name = "description")
    private String description;

    @Column(name = "requiredSkills")
    private String requiredSkills;

    @Column(name = "type")
    private String type;

    public HourlyProject() {
    }

    public HourlyProject(String name, String resourceNumber, LocalDate startDate, int duration, int budget, String description, String requiredSkills, String type) {
        this.name = name;
        this.resourceNumber = resourceNumber;
        this.startDate = startDate;
        this.duration = duration;
        this.budget = budget;
        this.description = description;
        this.requiredSkills = requiredSkills;
        this.type = type;
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

    public String getResourceNumber() {
        return resourceNumber;
    }

    public void setResourceNumber(String resourceNumber) {
        this.resourceNumber = resourceNumber;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public int getBudget() {
        return budget;
    }

    public void setBudget(int budget) {
        this.budget = budget;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getRequiredSkills() {
        return requiredSkills;
    }

    public void setRequiredSkills(String requiredSkills) {
        this.requiredSkills = requiredSkills;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return "HourlyProject{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", resourceNumber='" + resourceNumber + '\'' +
                ", startDate=" + startDate +
                ", duration=" + duration +
                ", budget=" + budget +
                ", description='" + description + '\'' +
                ", requiredSkills='" + requiredSkills + '\'' +
                ", type='" + type + '\'' +
                '}';
    }
}
