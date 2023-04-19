import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import {
    Container,
    Typography,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    IconButton,
    Button,
    Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CartItem from "./CartItem";

const ShoppingCart = () => {
    const { cartItems, dispatch } = useContext(CartContext);

    const handleRemove = (id) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: id });
    };

    const getTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    if (cartItems.length === 0) {
        return (
            <Container>
                <Typography variant="h4" gutterBottom>
                    Your Shopping Cart is Empty
                </Typography>
            </Container>
        );
    }

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Shopping Cart
            </Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Total</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cartItems.map((item) => (
                            <CartItem key={item.id} item={item} handleRemove={handleRemove} />
                        ))}
                        <TableRow>
                            <TableCell colSpan={3}>Total</TableCell>
                            <TableCell>${getTotal().toFixed(2)}</TableCell>
                            <TableCell />
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                <Button variant="contained" color="primary">
                    Checkout
                </Button>
            </Box>
        </Container>
    );
};

export default ShoppingCart;