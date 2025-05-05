import React from 'react';
import { useCart } from '../context/CartContext';

const Producto = ({ id, name, price, image }) => {
  const { addProduct } = useCart();

  const handleAddProduct = () => {
    const product = {
      id,
      name,
      price,
      image
    };
    addProduct(product);
  };

  return (
    <div className="producto">
      <img src={image} alt={name} className="producto-img" />
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={handleAddProduct}>Añadir al carrito</button>
    </div>
  );
};

export default Producto;
