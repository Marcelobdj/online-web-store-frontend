import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import {
    Container,
    Typography,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from "@mui/material";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import { useTheme } from '@mui/system';

const ShoppingCart = () => {
    const { cartItems, dispatch } = useContext(CartContext);
    const theme = useTheme();

    if (cartItems.length === 0) {
        return (
            <Container>
                <Typography variant="h4" gutterBottom style={{ color: theme.palette.text.primary }}>
                    Your Shopping Cart is Empty
                </Typography>
            </Container>
        );
    }

    return (
        <Container>
            <Typography variant="h4" gutterBottom style={{ color: theme.palette.text.primary }}>
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
                            <CartItem key={item.id} item={item} dispatch={dispatch} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <CartSummary />
        </Container>
    );
};

export default ShoppingCart;