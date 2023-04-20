import React, { useState } from "react";
import { Container, Typography, TextField, Box, Button, Grid } from "@mui/material";
import axios from "axios";
import { useTheme } from "@mui/system";
import Alert from "@mui/material/Alert";

const LoginForm = () => {
    const theme = useTheme();
    const [message, setMessage] = useState(null);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/users/login", formData);
            if (response.status === 200) {
                setMessage({ type: "success", text: "Login successful!" });
            }
        } catch (error) {
            setMessage({ type: "error", text: `Error during login: ${error.response.data.message}` });
        }
    };

    return (
        <Container maxWidth="xs">
            <Typography variant="h4" align="center" gutterBottom style={{ color: theme.palette.text.primary }}>
                Login
            </Typography>
            {message && (
                <Alert severity={message.type} sx={{ my: 2 }}>
                    {message.text}
                </Alert>
            )}
            {!message || message.type !== "success" ? (
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
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
                                name="password"
                                label="Password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                                <Button type="submit" variant="contained" color="primary">
                                    Login
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </form>
            ) : null}
        </Container>
    );
};

export default LoginForm;