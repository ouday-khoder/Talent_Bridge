import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import UserNavbar from '../../../UserNavbar/UserNavbar';
import axios from 'axios';

const BidApplyPage = () => {
    const { type } = useParams(); 
    const navigate = useNavigate();

    const [bidProjects, setBidProjects] = useState({
        deliveryDate: '',
        bidAmount: '',
        proposal: '',
    });

    const [applyProjects, setApplyProjects] = useState({
        proposalRate: '',
        deliveryDate: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (type === 'fixed') {
            setBidProjects({
                ...bidProjects,
                [name]: value,
            });
        } else {
            setApplyProjects({
                ...applyProjects,
                [name]: value,
            });
        }
    };
    const handleSubmit = async () => {
        try {
            const projectData = type === 'fixed' ? bidProjects : applyProjects;
            const response = await axios.post(`http://localhost:8080/api/${type === 'fixed' ? 'bidProjects' : 'applyProjects'}`, projectData);
            console.log(`${type === 'fixed' ? 'Bid' : 'Apply'} project posted!`, response.data);
            navigate("/freelancer/browse-projects")
            

        } catch (error) {
            console.error("Error posting project:", error);
        }
    };

    return (
        <>
            <UserNavbar />
            <Container maxWidth="md" sx={{ marginTop: '20px' }}>
                <Typography variant="h4">{type === 'fixed' ? 'Bid on Project' : 'Apply for Project'}</Typography>

                {type === 'fixed' ? (
                    <Box
                        component="form"
                        sx={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px', border: '1px solid #d5e0d5', borderRadius: '10px' }}
                    >
                        <TextField
                            label="Delivery Date"
                            name="deliveryDate"
                            type="date"
                            value={bidProjects.deliveryDate}
                            onChange={handleChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <TextField
                            label="Bid Amount"
                            name="bidAmount"
                            type="number"
                            value={bidProjects.bidAmount}
                            onChange={handleChange}
                        />

                        <TextField
                            label="Proposal"
                            name="proposal"
                            multiline
                            rows={4}
                            value={bidProjects.proposal}
                            onChange={handleChange}
                        />

                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ backgroundColor: '#ff4545', fontWeight: 'bold' }}
                            onClick={handleSubmit}
                        >
                            Bid
                        </Button>
                    </Box>
                ) : (
                    <Box
                        component="form"
                        sx={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px', border: '1px solid #d5e0d5', borderRadius: '10px' }}
                    >
                        <TextField
                            label="Proposal Rate"
                            name="proposalRate"
                            type="number"
                            value={applyProjects.proposalRate}
                            onChange={handleChange}
                        />

                        <TextField
                            label="Delivery Date"
                            name="deliveryDate"
                            type="date"
                            value={applyProjects.deliveryDate}
                            onChange={handleChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ backgroundColor: '#ff4545', fontWeight: 'bold' }}
                            onClick={handleSubmit}
                        >
                            Apply
                        </Button>
                    </Box>
                )}
            </Container>
        </>
    );
};

export default BidApplyPage;
