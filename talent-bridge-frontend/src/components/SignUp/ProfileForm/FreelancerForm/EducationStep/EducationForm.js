import React, { useState } from 'react';
import DynamicForm from '../DynamicForm';
import { useLocation } from 'react-router-dom';

const EducationForm = () => {
    const location = useLocation();
    const freelancerId = location.state?.freelancerId;

    const [educationFormData, setEducationFormData] = useState({
        school: '',
        fieldOfStudy: '',
        startDate: '',
        endDate: '',
        description: '',
        degree: '',
    });

    const educationFields = [
        { label: 'School', name: 'school', type: 'text' },
        { label: 'Field of Study', name: 'fieldOfStudy', type: 'text' },
        { label: 'Start Date', name: 'startDate', type: 'date' },
        { label: 'End Date', name: 'endDate', type: 'date' },
        { label: 'Description', name: 'description', type: 'text', multiline: true, rows: 4 },
        { label: 'Degree', name: 'degree', type: 'text' },
    ];

    return (
        <DynamicForm
            formData={educationFormData}
            setFormData={setEducationFormData}
            formFields={educationFields}
            formTitle="Education"
            apiUrl={`http://localhost:8080/api/freelancers/${freelancerId}/educations`}
        />
    );
};

export default EducationForm;

