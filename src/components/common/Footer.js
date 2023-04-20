import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { useTheme } from '@mui/system';

const Footer = () => {
    const theme = useTheme();
    return (
        <Box sx={{ backgroundColor: theme.palette.navbarFooter.background }}>
            <Container maxWidth="lg">
                <Typography variant="body1" color="text.secondary">
                    &copy; {new Date().getFullYear()} Web Store. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;