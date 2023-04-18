import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import ProductItem from "./ProductItem";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/products");
                setProducts(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <Grid container spacing={2}>
            {products.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product._id}>
                    <ProductItem product={product} />
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductList;