import { createContext, useEffect, useState } from "react";

export const productContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

  function dola(item) {
    setProduct(item);
  }

  // get Items from Local Storage
  useEffect(() => {
    if (localStorage.getItem("product")) {
      setProduct(JSON.parse(localStorage.getItem("product")));
    } else {
      setProduct([]);
    }
  }, []);
  // set item to local storage
  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(product));
  }, [product]);

  return (
    <productContext.Provider value={{ dola, product }}>
      {children}
    </productContext.Provider>
  );
};
