// src/components/Toast.jsx
import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Animación de entrada
const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
`;

// Animación de salida
const fadeOut = keyframes`
  0% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(10px); }
`;

const ToastContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #333;
  color: white;
  padding: 15px 20px;
  border-radius: 5px;
  font-size: 1rem;
  z-index: 1000;
  animation: ${props => (props.show ? fadeIn : fadeOut)} 0.5s ease-in-out;
`;

const Toast = ({ message, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose(); // Ocultar el toast después de 3 segundos
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <ToastContainer show={show}>
      {message}
    </ToastContainer>
  );
};

export default Toast;
