import { useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import Basket from "./components/Basket/Basket";
import BasketProvider from "./store/BasketProvider";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";

function App() {
  const [basketIsOpen, setBasketIsOpen] = useState(false);
  const [loginIsOpen, setLoginIsOpen] = useState(false);
  const [signUpIsOpen, setSignUpIsOpen] = useState(false);

  const openBasketHandler = () => {
    setBasketIsOpen(true);
  };

  const closeBasketHandler = () => {
    setBasketIsOpen(false);
  };

  const openLoginHandler = () => {
    setLoginIsOpen(true);
  };

  const closeLoginHandler = () => {
    setLoginIsOpen(false);
  };

  const openSignUpHandler = () => {
    setSignUpIsOpen(true);
  };

  const closeSignUpHandler = () => {
    setSignUpIsOpen(false);
  };

  return (
    <BasketProvider>
      {basketIsOpen && <Basket onClose={closeBasketHandler} />}
      <Header onOpenBasket={openBasketHandler} onOpenLogin={openLoginHandler} onOpenSignUp={openSignUpHandler} />
      {loginIsOpen && <Login onClose={closeLoginHandler} />}
      {signUpIsOpen && <SignUp onClose={closeSignUpHandler}/>}
      <main>
        <Products />
      </main>
    </BasketProvider>
  );
}

export default App;
