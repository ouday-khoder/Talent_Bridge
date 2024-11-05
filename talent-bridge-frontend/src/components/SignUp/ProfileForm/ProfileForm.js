import React, { useState } from 'react';
import { Box } from '@mui/material';
import ClientForm from './ClientForm/ClientForm';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import FreelancerForm from './FreelancerForm/FreelancerForm';


const ProfileForm = () => {

    const {clientId, freelancerId} = useParams();
    const location = useLocation();
    const isFreelancer = location.pathname.includes('/freelancer');

    const [profile, setProfile] = useState({
        country: '', city: '', street: '', postCode: '', 
        dateOfBirth: '', gender: '', jobTitle: '', 
        phoneNumber: '', bio: '', hourlyRate: '',   
    });

    const [activeComponent, setActiveComponent] = useState('Profile');



    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleProfileSaved = () => {
        const sections = ['Profile', 'Skills', 'Education', 'Certification', 'Article'];
        const currentIndex = sections.indexOf(activeComponent);

        if(currentIndex < sections.length - 1) {
            setActiveComponent(sections[currentIndex + 1]);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const userId = isFreelancer ? freelancerId : clientId;

        const url = isFreelancer ? 
        `http://localhost:8080/api/freelancers/profile/${userId}` : 
        `http://localhost:8080/api/clients/profile/${userId}`;

        axios.post(url, profile)
        .then(response => {
            console.log(response.data)
            console.log("Profile saved successfully")
            handleProfileSaved();
        })
        .catch(error => {
            console.log("Failed to save profile", error);
        })
    };
    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            {isFreelancer ? (
                <FreelancerForm 
                    profile={profile}
                    handleChange={handleChange}
                    freelancerId={freelancerId}
                    activeComponent={activeComponent}
                    setActiveComponent={setActiveComponent}
                    handleProfileSaved={handleProfileSaved}
                />
            ) : (
                <ClientForm 
                    profile={profile}
                    handleChange={handleChange}
                />
            )
        }
        </Box>
    );
};

export default ProfileForm;
