import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Typography, Box, List, ListItem, ListItemText } from "@mui/material";

const AdminOrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/orders");
                setOrders(response.data);
            } catch (error) {
                console.error("Error fetching orders:", error.response.data.message);
            }
        };

        fetchOrders();
    }, []);

    return (
        <Container>
            <Typography variant="h4" align="center" gutterBottom>
                Order List
            </Typography>
            <Box>
                <List>
                    {orders.map((order) => (
                        <ListItem key={order._id}>
                            <ListItemText
                                primary={`Order ID: ${order._id}`}
                                secondary={`Total Price: ${order.totalPrice}, Date: ${new Date(
                                    order.createdAt
                                ).toLocaleDateString()}`}
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Container>
    );
};

export default AdminOrderList;