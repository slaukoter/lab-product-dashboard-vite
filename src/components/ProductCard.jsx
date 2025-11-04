import React from "react";
import styles from "../styles/ProductCard.module.css";
import { Button } from "@mui/material";

const ProductCard = ({ product, onRemove }) => {
  // Keep test class names + CSS Module class
  const testClass = product.inStock ? "inStockClass" : "outOfStockClass";
  const moduleClass = product.inStock ? styles.inStock : styles.outOfStock;

  return (
    <div className={`${styles.card} ${moduleClass} ${testClass}`}>
      <h3 className={styles.name}>{product.name}</h3>
      <p className={styles.price}>${product.price}</p>
      <p className={styles.status}>
        {product.inStock ? "In Stock" : "Out of Stock"}
      </p>

      <Button
        variant="contained"
        color="error"
        size="small"
        onClick={() => onRemove(product.id)}
      >
        Remove
      </Button>
    </div>
  );
};

export default ProductCard;
