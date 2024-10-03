"use client";

import { createContext, useState, useContext } from 'react';

const AppContext = createContext(undefined);

export const AppContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const cartLength = cart.length

  const handleAddToCart = (name, price, image, description, id, quantity) => {
    const product = {
      name,
      price,
      image,
      description,
      id,
      quantity
    }
    const existingProduct = cart.find((item) => item.id === id);
    if(existingProduct){
      existingProduct.quantity += quantity;
      return setCart(([...cart]));
    }else{
      setCart([...cart, product]/*[...]agarra todo lo que tenia en cart y le agrega un valor mas*/);
    }
  };

  const handleRemoveProduct = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  }

  const cartTotal = () => cart.reduce((acc, item) => acc + item.price * item.quantity ,0);

  return (
    <AppContext.Provider
      value={{
        cart,
        setCart,
        cartLength,
        handleAddToCart,//deja disponible en toda la aplicacion para usarla cuando quiera
        cartTotal,
        handleRemoveProduct
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(`useAppContext tiene que ser usado dentro del provider`);
  }
  return context;
};

export default AppContext;
