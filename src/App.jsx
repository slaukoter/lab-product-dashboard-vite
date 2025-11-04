import React, { useState } from "react";
import ProductList from "./components/ProductList";
import "./App.css";
import { Container, Typography } from "@mui/material";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 999, inStock: true },
    { id: 2, name: "Phone", price: 699, inStock: false },
    { id: 3, name: "Tablet", price: 499, inStock: true },
  ]);

  const handleRemove = (id) =>
    setProducts((prev) => prev.filter((p) => p.id !== id));

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Product Dashboard
      </Typography>
      <ProductList products={products} onRemove={handleRemove} />
    </Container>
  );
};

export default App;
