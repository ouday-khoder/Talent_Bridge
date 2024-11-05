import React, { useState } from 'react';
import DynamicForm from '../DynamicForm';
import { useLocation } from 'react-router-dom';

const CertificationForm = () => {
    const location = useLocation();
    const freelancerId = location.state?.freelancerId;

    const [certificationFormData, setCertificationFormData] = useState({
        name: '',
        issuedOrganization: '',
        issuedDate: '',
        description2: '',
    });

    const certificationFields = [
        { label: 'Certification Name', name: 'name', type: 'text' },
        { label: 'Issuing Organization', name: 'issuedOrganization', type: 'text' },
        { label: 'Issued Date', name: 'issuedDate', type: 'date' },
        { label: 'Description', name: 'description2', type: 'text', multiline: true, rows: 4 },
    ];

    return (
        <DynamicForm
            formData={certificationFormData}
            setFormData={setCertificationFormData}
            formFields={certificationFields}
            formTitle="Certification"
            apiUrl={`http://localhost:8080/api/freelancers/${freelancerId}/certifications`}
        />
    );
};

export default CertificationForm;
