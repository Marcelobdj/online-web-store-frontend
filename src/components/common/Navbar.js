import React from "react";
import { AppBar, Toolbar, Typography, Button, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useTheme } from '@mui/system';

const Navbar = () => {
    const { totalItems } = useCart();
    const theme = useTheme();

    return (
        <AppBar position="static" sx={{ backgroundColor: theme.palette.navbarFooter.background }}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                        Web Store
                    </Link>
                </Typography>
                <Button color="inherit" component={Link} to="/login">
                    Login
                </Button>
                <Button color="inherit" component={Link} to="/register">
                    Register
                </Button>
                <Button color="inherit" component={Link} to="/cart">
                    <Badge badgeContent={totalItems} color="error">
                        <ShoppingCartIcon />
                    </Badge>
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;