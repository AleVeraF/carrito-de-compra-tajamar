import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, addProduct, removeProduct } = useCart();

  const handleAddProduct = () => {
    const newProduct = {
      id: Date.now(), // Un ID único para el producto
      name: 'Nuevo Producto',
      price: 20
    };
    addProduct(newProduct);
  };

  const handleRemoveProduct = (productId) => {
    removeProduct(productId);
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <button onClick={handleAddProduct}>Agregar Producto</button>
      <ul>
        {cart && cart.length > 0 ? (
          cart.map(product => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <button onClick={() => handleRemoveProduct(product.id)}>Eliminar</button>
            </li>
          ))
        ) : (
          <p>No hay productos en el carrito</p>
        )}
      </ul>
    </div>
  );
};

export default Cart;
