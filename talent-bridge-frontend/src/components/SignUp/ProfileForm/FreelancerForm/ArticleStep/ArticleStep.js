import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, Paper, Box, Button } from '@mui/material';
import axios from 'axios';

const ArticleStep = ({ freelancerId }) => {
    const [articles, setArticles] = useState([
        {
            title: '',
            link: '',
            description: ''
        }
    ]);

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        setArticles(prevArticles =>
            prevArticles.map((article, i) =>
                i === index ? 
                {
                    ...article,
                    [name]: value 
                } 
                :
                article
            )
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting article form data:", articles);

        try {
            const response = await axios.post(`http://localhost:8080/api/freelancers/${freelancerId}/articles`, articles);
            console.log("Article form submitted successfully:", response.data);
        } catch (error) {
            console.error("Error submitting article form:", error.response ? error.response.data : error.message);
        }
    };

    return (
        <Box>
            <Typography variant="h5" gutterBottom>
                Looking good. Next, add your articles or blogs.
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
                Clients like to know more about you and to see your recherches and what blogs you write.
            </Typography>
            <TableContainer component={Paper} style={{ marginTop: '20px' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Link</TableCell>
                            <TableCell>Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {articles.map((article, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <TextField
                                        name="title"
                                        variant="outlined"
                                        size="small"
                                        value={article.title}
                                        onChange={(e) => handleChange(e, index)}
                                        placeholder="Enter Title"
                                    />
                                </TableCell>
                                <TableCell>
                                    <TextField
                                        name="link"
                                        variant="outlined"
                                        size="small"
                                        value={article.link}
                                        onChange={(e) => handleChange(e, index)}
                                        placeholder="Enter Link"
                                    />
                                </TableCell>
                                <TableCell>
                                    <TextField
                                        name="description"
                                        variant="outlined"
                                        size="small"
                                        value={article.description}
                                        onChange={(e) => handleChange(e, index)}
                                        placeholder="Enter Description"
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Button onClick={handleSubmit} type='submit' variant='contained' color='primary'> 
                Send
            </Button>
        </Box>
    );
}

export default ArticleStep;
