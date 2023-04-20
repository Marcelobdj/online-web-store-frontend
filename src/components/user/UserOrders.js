import React, { useState, useEffect } from "react";
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

const UserOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Fetch user's order history from your API
        const fetchOrders = async () => {
            try {
                const response = await fetch("/api/orders"); // Update with your actual API endpoint
                const data = await response.json();
                setOrders(data);
            } catch (error) {
                console.error("Failed to fetch user's order history:", error);
            }
        };

        fetchOrders();
    }, []);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Order History
            </Typography>
            {orders.length > 0 ? (
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Order ID</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Total</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((order) => (
                                <TableRow key={order._id}>
                                    <TableCell>{order._id}</TableCell>
                                    <TableCell>
                                        {new Date(order.date).toLocaleDateString()}
                                    </TableCell>
                                    <TableCell>${order.total.toFixed(2)}</TableCell>
                                    <TableCell>{order.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
                <Typography variant="subtitle1">
                    You have no orders in your history.
                </Typography>
            )}
        </Container>
    );
};

export default UserOrders;