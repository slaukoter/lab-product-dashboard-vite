import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, onRemove }) => {
  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default ProductList;
