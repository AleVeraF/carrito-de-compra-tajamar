import './App.css';
import React from 'react';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart'; // Importar tu componente donde usarás el carrito

function App() {
  return (
    <CartProvider>
      <div className="App">
        <h1>Mi Carrito de Compras</h1>
        <Cart /> {/* Este es el componente donde mostrarás el carrito */}
      </div>
    </CartProvider>
  );
}

export default App;

