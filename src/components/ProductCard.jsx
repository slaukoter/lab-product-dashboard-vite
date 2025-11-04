import React from "react";

const ProductCard = ({ product, onRemove }) => {
  const wrapperClass = product.inStock ? "inStockClass" : "outOfStockClass";

  return (
    <div className={wrapperClass}>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>
      <button onClick={() => onRemove(product.id)}>Remove</button>
    </div>
  );
};

export default ProductCard;
