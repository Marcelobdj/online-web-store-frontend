import React, { useContext } from "react";
import { Box, Typography, Button } from "@mui/material";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";

const CartSummary = () => {
    const { cartItems } = useContext(CartContext);

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <Box sx={{ marginTop: "auto", marginBottom: 2 }}>
            <Typography variant="h6" gutterBottom>
                Total: ${calculateTotal().toFixed(2)}
            </Typography>
            <Button
                component={Link}
                to="/checkout"
                variant="contained"
                color="primary"
                disabled={cartItems.length === 0}
            >
                Proceed to Checkout
            </Button>
        </Box>
    );
};

export default CartSummary;