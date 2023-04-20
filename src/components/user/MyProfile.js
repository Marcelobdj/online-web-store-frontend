import React, { useState, useContext, useEffect } from "react";
import { TextField, Button, Typography, Grid } from "@mui/material";
import { UserContext } from "../../context/UserContext";
import { useTheme } from "@mui/system";
import UserOrders from "./UserOrders";

const MyProfile = () => {
    const { user, updateUser, getMyOrders } = useContext(UserContext);
    const [name, setName] = useState(user.name);
    const [password, setPassword] = useState("");
    const theme = useTheme();

    const handleUpdate = async () => {
        const updatedUser = await updateUser({ name, password });
        if (updatedUser) {
            setName(updatedUser.name);
            setPassword("");
        }
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
                    My Profile
                </Typography>
                <TextField
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{ color: theme.palette.text.primary }}
                />
                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{ color: theme.palette.text.primary }}
                />
                <Button onClick={handleUpdate} sx={{ color: theme.palette.text.primary }}>
                    Update Profile
                </Button>
            </Grid>
            <Grid item xs={12} md={6}>
                <UserOrders />
            </Grid>
        </Grid>
    );
};

export default MyProfile;