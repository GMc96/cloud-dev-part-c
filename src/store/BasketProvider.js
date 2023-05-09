import { useReducer } from "react";

import BasketContext from "./basket-context";

const defaultBasketState = {
  products: [],
  total: 0,
};

const basketReducer = (state, action) => {
  if (action.type === "ADD_PRODUCT") {
    const updatedTotal =
      state.total + action.product.price * action.product.amount;

    const existingProductIndex = state.products.findIndex(
      (product) => product.id === action.product.id
    );

    const existingProduct = state.products[existingProductIndex];

    let updatedProducts;

    if (existingProduct) {
      const updatedProduct = {
        ...existingProduct,
        amount: existingProduct.amount + action.product.amount,
      };
      updatedProducts = [...state.products];
      updatedProducts[existingProductIndex] = updatedProduct;
    } else {
      updatedProducts = state.products.concat(action.product);
    }

    return {
      products: updatedProducts,
      total: updatedTotal,
    };
  }

  if ({ type: "REMOVE_PRODUCT" }) {
    const removeProductIndex = state.products.findIndex(
      (product) => product.id === action.id
    );
    const existingProduct = state.products[removeProductIndex];
    const updatedTotal = state.total - existingProduct.price;
    let updatedProducts;
    if (existingProduct.amount === 1) {
      updatedProducts = state.products.filter(
        (product) => product.id !== action.id
      );
    } else {
      const updatedProduct = {
        ...existingProduct,
        amount: existingProduct.amount - 1,
      };
      updatedProducts = [...state.products];
      updatedProducts[removeProductIndex] = updatedProduct;
    }

    return {
      products: updatedProducts,
      total: updatedTotal,
    };
  }

  return defaultBasketState;
};

const BasketProvider = (props) => {
  const [basketState, dispachBasketAction] = useReducer(
    basketReducer,
    defaultBasketState
  );

  const addProductHandler = (product) => {
    dispachBasketAction({ type: "ADD_PRODUCT", product: product });
  };

  const removeProductHandler = (id) => {
    dispachBasketAction({ type: "REMOVE_PRODUCT", id: id });
  };

  const basketContext = {
    products: basketState.products,
    total: basketState.total,
    addItem: addProductHandler,
    removeItem: removeProductHandler,
  };

  return (
    <BasketContext.Provider value={basketContext}>
      {props.children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
