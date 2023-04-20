import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useTheme } from '@mui/system';

const ProductItem = ({ product }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product);
    };

    const theme = useTheme();

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={product.image} // Replace this with the actual image URL
                alt={product.name}
            />
            <CardContent>
                <Link to={`/products/${product._id}`} style={{ textDecoration: "none", color: theme.palette.text.primary }} onMouseEnter={(e) => { e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.textDecoration = 'none'; }} >
                    <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>
                </Link>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
                <Typography variant="h6">${product.price}</Typography>
            </CardContent>
            <Button variant="contained" color="primary" sx={{ m: 1 }} onClick={handleAddToCart}>
                Add to Cart
            </Button>
        </Card>
    );
};

export default ProductItem;