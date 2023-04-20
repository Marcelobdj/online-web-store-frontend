import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import CartContext from "../../context/CartContext";
import { useTheme } from '@mui/system';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { dispatch } = useContext(CartContext);
    const theme = useTheme();

    const handleAddToCart = () => {
        dispatch({ type: "ADD_TO_CART", payload: product });
    };

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
                    <Typography variant="h4" gutterBottom style={{ color: theme.palette.text.primary }}>
                        {product.name}
                    </Typography>
                    <Typography variant="h6" color={theme.palette.text.secondary} gutterBottom>
                        ${product.price}
                    </Typography>
                    <Typography variant="body1" paragraph style={{ color: theme.palette.text.primary }}>
                        {product.description}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Button variant="contained" color="primary" sx={{ mr: 2 }} onClick={handleAddToCart}>
                            Add to Cart
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ProductDetails;