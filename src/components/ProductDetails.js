import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Typography, Button, Container, Grid } from "@mui/material";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <img
                        src={product.image} // Replace this with the actual image URL
                        alt={product.name}
                        style={{ width: "100%", maxHeight: "500px", objectFit: "contain" }}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" gutterBottom>
                        ${product.price}
                    </Typography>
                    <Typography variant="body1" paragraph>
                        {product.description}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                            Add to Cart
                        </Button>
                        <Button variant="outlined" color="primary">
                            Back to Products
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ProductDetails;