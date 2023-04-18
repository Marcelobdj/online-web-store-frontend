import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: "primary.main", p: 2 }}>
            <Container maxWidth="lg">
                <Typography variant="body1" color="text.secondary">
                    &copy; {new Date().getFullYear()} Web Store. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;