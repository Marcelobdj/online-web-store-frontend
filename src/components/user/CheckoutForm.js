import React, { useState } from "react";
import {
    Container,
    Typography,
    TextField,
    Box,
    Button,
    Grid,
} from "@mui/material";
import { useTheme } from '@mui/system';

const CheckoutForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        city: "",
        zip: "",
        country: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Process the payment and submit the order
        console.log("Form Data:", formData);
    };

    const theme = useTheme();

    return (
        <Container>
            <Typography variant="h4" gutterBottom style={{ color: theme.palette.text.primary }}>
                Checkout
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            required
                            name="firstName"
                            label="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            required
                            name="lastName"
                            label="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            required
                            name="email"
                            label="Email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            required
                            name="address"
                            label="Address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            required
                            name="city"
                            label="City"
                            value={formData.city}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            required
                            name="zip"
                            label="ZIP / Postal Code"
                            value={formData.zip}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            required
                            name="country"
                            label="Country"
                            value={formData.country}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        {/* You can replace this with an actual payment processing component */}
                        <Typography variant="subtitle1" style={{ color: theme.palette.text.primary }}>Payment Details (To be implemented)</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                            <Button type="submit" variant="contained" color="primary">
                                Place Order
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default CheckoutForm;