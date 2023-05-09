import React from "react";

const BasketContext = React.createContext({
  products: [],
  total: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default BasketContext;
