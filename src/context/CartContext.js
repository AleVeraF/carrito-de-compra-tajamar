// src/context/CartContext.js
import React, { createContext, useReducer, useContext, useState, useEffect } from 'react';
import Toast from '../components/Toast';

const CartContext = createContext();

const initialState = JSON.parse(localStorage.getItem('carrito')) || [];

const ADD_PRODUCT = 'AGREGAR_PRODUCTO';
const REMOVE_PRODUCT = 'ELIMINAR_PRODUCTO';

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const updatedStateAdd = [...state];
      const existingProductIndex = updatedStateAdd.findIndex(
        product => product.id === action.payload.id
      );
      if (existingProductIndex >= 0) {
        updatedStateAdd[existingProductIndex].quantity += 1;
      } else {
        updatedStateAdd.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem('carrito', JSON.stringify(updatedStateAdd));
      return updatedStateAdd;

    case REMOVE_PRODUCT:
      const updatedStateRemove = state.filter(product => product.id !== action.payload);
      localStorage.setItem('carrito', JSON.stringify(updatedStateRemove));
      return updatedStateRemove;

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Guardar el estado del carrito en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(state));
  }, [state]);

  const addProduct = (product) => {
    setToastMessage('Producto agregado al carrito');
    setShowToast(true); // Mostrar el toast al agregar el producto
    dispatch({ type: ADD_PRODUCT, payload: product });
  };

  const removeProduct = (productId) => {
    setToastMessage('Producto eliminado del carrito');
    setShowToast(true); // Mostrar el toast al eliminar el producto
    dispatch({ type: REMOVE_PRODUCT, payload: productId });
  };

  const handleCloseToast = () => {
    setShowToast(false); // Ocultar el toast manualmente
  };

  return (
    <CartContext.Provider value={{ cart: state, addProduct, removeProduct }}>
      {children}
      <Toast message={toastMessage} show={showToast} onClose={handleCloseToast} />
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
