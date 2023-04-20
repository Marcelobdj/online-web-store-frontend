import React from "react";
import { TableRow, TableCell, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTheme } from '@mui/system';

const CartItem = ({ item, dispatch }) => {
    const handleRemove = (id) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: id });
    };

    const theme = useTheme();

    return (
        <TableRow key={item._id}>
            <TableCell style={{ color: theme.palette.text.primary }}>{item.name}</TableCell>
            <TableCell style={{ color: theme.palette.text.primary }}>${item.price.toFixed(2)}</TableCell>
            <TableCell style={{ color: theme.palette.text.primary }}>{item.quantity}</TableCell>
            <TableCell style={{ color: theme.palette.text.primary }}>${(item.price * item.quantity).toFixed(2)}</TableCell>
            <TableCell>
                <IconButton onClick={() => handleRemove(item._id)} color="error">
                    <DeleteIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    );
};

export default CartItem;