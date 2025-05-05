import React from 'react';
import { useCart } from '../context/CartContext';

const Carrito = () => {
  const { cart, removeProduct } = useCart();

  // Calcular el total del carrito
  const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

  return (
    <div className="bg-gray-50 min-h-screen py-6 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Carrito de Compras</h2>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {cart.length > 0 ? (
          <ul className="space-y-4">
            {cart.map(product => (
              <li key={product.id} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
                    <p className="text-sm text-gray-600">${product.price} x {product.quantity}</p>
                    <p className="text-sm text-gray-500">Subtotal: ${product.price * product.quantity}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeProduct(product.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-600">No hay productos en el carrito</p>
        )}

        <div className="mt-6 flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-800">Total: ${total}</h3>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
