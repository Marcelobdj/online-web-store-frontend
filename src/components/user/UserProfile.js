import React, { useState, useEffect } from "react";
import {
    Container,
    Typography,
    TextField,
    Box,
    Button,
    Grid,
    Divider,
} from "@mui/material";
import axios from "axios";
import UserOrders from "./UserOrders";
import { useTheme } from '@mui/system';

const UserProfile = () => {
    const theme = useTheme();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem("token");
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                };
                const response = await axios.get("http://localhost:5000/api/users/profile", config);
                setFormData(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching profile:", error.response.data.message);
            }
        };

        fetchProfile();
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const token = localStorage.getItem("token");
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            const response = await axios.put("http://localhost:5000/api/users/profile", formData, config);
            console.log("Profile updated:", response.data);
        } catch (error) {
            console.error("Error updating profile:", error.response.data.message);
        }
    };

    if (loading) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <Container>
            <Typography variant="h4" align="center" gutterBottom style={{ color: theme.palette.text.primary }}>
                User Profile
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            required
                            name="name"
                            label="Name"
                            value={formData.name}
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
                            name="password"
                            label="Password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            helperText="Leave blank to keep the same password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                            <Button type="submit" variant="contained" color="primary">
                                Update Profile
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </form>
            <Divider sx={{ my: 4 }} />
            <UserOrders />
        </Container>
    );
};

export default UserProfile;