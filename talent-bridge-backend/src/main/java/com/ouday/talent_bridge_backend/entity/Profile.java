package com.ouday.talent_bridge_backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "profile")
public class Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "country")
    private String country;

    @Column(name = "city")
    private String city;

    @Column(name = "street")
    private String street;

    @Column(name = "postCode")
    private String postCode;

    @Column(name = "dateOfBirth")
    private String dateOfBirth;

    @Column(name = "gender")
    private String gender;

    @Column(name = "jobTitle")
    private String jobTitle;

    @Column(name = "phoneNumber")
    private String phoneNumber;

    @Column(name = "bio")
    private String bio;

    @Column(name = "hourlyRate")
    private int hourlyRate;


    public Profile() {
    }

    public Profile(String country, String city, String street, String postCode, String dateOfBirth, String gender, String jobTitle, String phoneNumber, String bio, int hourlyRate) {

        this.country = country;
        this.city = city;
        this.street = street;
        this.postCode = postCode;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.jobTitle = jobTitle;
        this.phoneNumber = phoneNumber;
        this.bio = bio;
        this.hourlyRate = hourlyRate;
    }


    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getPostCode() {
        return postCode;
    }

    public void setPostCode(String postCode) {
        this.postCode = postCode;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public int getHourlyRate() {
        return hourlyRate;
    }

    public void setHourlyRate(int hourlyRate) {
        this.hourlyRate = hourlyRate;
    }



    @Override
    public String toString() {
        return "Profile{" +
                "country='" + country + '\'' +
                ", city='" + city + '\'' +
                ", street='" + street + '\'' +
                ", postCode='" + postCode + '\'' +
                ", dateOfBirth='" + dateOfBirth + '\'' +
                ", gender='" + gender + '\'' +
                ", jobTitle='" + jobTitle + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", bio='" + bio + '\'' +
                ", hourlyRate='" + hourlyRate + '\'' +
                '}';
    }
}
