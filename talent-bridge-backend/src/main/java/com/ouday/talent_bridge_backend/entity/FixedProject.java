package com.ouday.talent_bridge_backend.entity;

import jakarta.persistence.*;

import java.time.LocalDate;


@Entity
@Table(name = "fixed_project")
public class FixedProject {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "dueDate")
    private LocalDate dueDate;

    @Column(name = "description")
    private String description;

    @Column(name = "requiredSkills")
    private String requiredSkills;

    @Column(name = "type")
    private String type;

    public FixedProject() {
    }

    public FixedProject(String name, LocalDate dueDate, String description, String requiredSkills,  String type) {
        this.name = name;
        this.dueDate = dueDate;
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

    public LocalDate getDueDate() {
        return dueDate;
    }

    public void setDueDate(LocalDate dueDate) {
        this.dueDate = dueDate;
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
        return "FixedProject{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", dueDate=" + dueDate +
                ", description='" + description + '\'' +
                ", requiredSkills='" + requiredSkills + '\'' +
                ", type='" + type + '\'' +
                '}';
    }
}
