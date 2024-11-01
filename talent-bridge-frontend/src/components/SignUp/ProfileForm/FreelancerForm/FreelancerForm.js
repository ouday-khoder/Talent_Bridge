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

const FreelancerForm = ({ profile, handleChange, freelancerId }) => {

    const renderComponent = () => {
        switch ("Profile") {
            case 'Profile' : 
                return <ProfileStep  freelancerId={freelancerId} profile={profile} handleChange={handleChange}/>;
            case 'Skills' : 
                return <SkillStep />
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
