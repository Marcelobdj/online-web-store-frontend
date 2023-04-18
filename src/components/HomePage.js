import React from "react";
import { Box, Typography, Container, Button, Grid } from "@mui/material";
import ProductList from "./ProductList";

const HomePage = () => {
    return (
        <div>
            <Box
                sx={{
                    height: "80vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    backgroundImage: "url('/hero-image.jpg')", // Add your hero image to the public folder and replace the URL
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <Typography variant="h2" color="white" gutterBottom>
                    Welcome to our Web Store
                </Typography>
                <Button variant="contained" size="large" color="secondary">
                    Shop Now
                </Button>
            </Box>

            <Container>
                <Typography variant="h4" color="text.primary" gutterBottom>
                    Featured Products
                </Typography>
                <ProductList />
            </Container>

            <Box sx={{ backgroundColor: "secondary.main", p: 4 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h4" color="white">
                                Subscribe to our Newsletter
                            </Typography>
                            <Typography variant="body1" color="white" gutterBottom>
                                Stay up to date with the latest products and promotions.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            {/* Add a newsletter subscription form here */}
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default HomePage;