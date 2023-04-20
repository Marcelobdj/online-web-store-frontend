import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import axios from "axios";

const AddProduct = () => {
    const [productData, setProductData] = useState({
        name: "",
        description: "",
        price: "",
        image: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Call the API to save the product data
        try {
            const response = await axios.post("http://localhost:5000/api/products", productData);
            console.log(response.data);
            setProductData({
                name: "",
                description: "",
                price: "",
                image: "",
            });
        } catch (error) {
            console.error("Error while saving product data:", error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        label="Product Name"
                        name="name"
                        value={productData.name}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        label="Price"
                        name="price"
                        type="number"
                        value={productData.price}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Description"
                        name="description"
                        multiline
                        rows={4}
                        value={productData.description}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Image URL"
                        name="image"
                        value={productData.image}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" type="submit">
                        Save Product
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default AddProduct;