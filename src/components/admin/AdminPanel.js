import React, { useState } from "react";
import { Container, Typography, Box, Button, Grid, Paper } from "@mui/material";
import AdminUserList from "./AdminUserList";
import AdminProductList from "./AdminProductList";
import AdminOrderList from "./AdminOrderList";
import AddProduct from "./AddProduct";

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
                        <AddProduct />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary">
                            Save Product
                        </Button>
                    </Grid>
                </Grid>
            )}
            <AdminUserList />
            <AdminProductList />
            <AdminOrderList />
        </Container>
    );
};

export default AdminPanel;