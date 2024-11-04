import React from 'react';
import { Box } from '@mui/material';

import ProfileStep from './ProfileStep/ProfileStep';
import SkillStep from './SkillStep/SkillStep';
import EducationStep from './EducationStep/EducationStep';
import CertificationStep from './CertificationStep/CertificationStep';
import ArticleStep from './ArticleStep/ArticleStep';

    const CircleButton = ({ label, onClick, isActive }) => (
    <Box 
    sx={{
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: isActive ? '#0056b3' : '#007bff',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        margin: '10px'
    }}
    onClick={() => onClick(label)}
    >
    {label}
    </Box>
);

const FreelancerForm = ({ profile, handleChange, freelancerId, activeComponent, setActiveComponent, handleProfileSaved }) => {


    const handleComponentChange = (label) => {
        setActiveComponent(label);  // Correctly change the active component based on the clicked circle
    };


    const renderComponent = () => {
        switch (activeComponent) {
            case 'Profile' : 
                return <ProfileStep  freelancerId={freelancerId} profile={profile} handleChange={handleChange}  handleProfileSaved={handleProfileSaved}/>;
            case 'Skills' : 
                return <SkillStep freelancerId={freelancerId} handleProfileSaved={handleProfileSaved}/>
            case 'Education' : 
                return <EducationStep />
            case 'Certification' : 
                return <CertificationStep />
            case 'Article' : 
                return <ArticleStep />
            default: 
            return null;
            
        }
    }

  return (
    <Box >
            <Box sx={{textAlign: 'center'}}>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    {['Profile', 'Skills', 'Education', 'Certification', 'Article'].map(label =>   (
                        <CircleButton
                            key={label}
                            label={label}
                            onClick={handleComponentChange}
                            isActive={activeComponent === label}
                        />
                    ))}
                </Box>
                <Box sx={{marginTop: '20px'}}>
                    {renderComponent()}
                </Box>
            </Box>
    </Box>
  );
};

export default FreelancerForm;
