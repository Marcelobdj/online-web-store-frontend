// frontend/src/components/AdminPanel.js
import React, { useState } from "react";
import { Container, Typography, Box, Button, Grid, Paper } from "@mui/material";

const AdminPanel = () => {
    const [showAddProduct, setShowAddProduct] = useState(false);

    const handleAddProduct = () => {
        setShowAddProduct(!showAddProduct);
    };

    return (
        <Container maxWidth="lg">
            <Typography variant="h4" align="center" gutterBottom>
                Admin Panel
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Button variant="contained" color="primary" onClick={handleAddProduct}>
                    {showAddProduct ? "Close Add Product" : "Add Product"}
                </Button>
            </Box>
            {showAddProduct && (
                <Grid container spacing={2} sx={{ mt: 2 }}>
                    <Grid item xs={12}>
                        {/* Include the AddProduct component here */}
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary">
                            Save Product
                        </Button>
                    </Grid>
                </Grid>
            )}
            <Grid container spacing={2} sx={{ mt: 2 }}>
                {/* Render a list of products with edit and delete buttons */}
                <Grid item xs={12} md={4}>
                    <Paper elevation={2} sx={{ p: 2 }}>
                        <Typography variant="h6">Product Name</Typography>
                        <Typography>Price: $100</Typography>
                        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                            <Button variant="contained" color="primary" sx={{ mr: 1 }}>
                                Edit
                            </Button>
                            <Button variant="contained" color="error">
                                Delete
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
                {/* Add more product cards */}
            </Grid>
        </Container>
    );
};

export default AdminPanel;