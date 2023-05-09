import { useContext } from "react";
import Modal from "../UI/Modal";
import BasketItem from "./BasketItem";
import styles from "./Basket.module.css";
import BasketContext from "../../store/basket-context";
import axios from "axios";

const Basket = (props) => {
  const basketCtx = useContext(BasketContext);

  const total = `€${parseFloat(basketCtx.total).toFixed(2)}`;
  const hasProducts = basketCtx.products.length > 0;

  const addProductHandler = (product) => {
    basketCtx.addItem(product);
  };

  const removeProductHandler = (id) => {
    basketCtx.removeItem();
  };


  const productsInBasket = (
    <ul className={styles.basketProducts}>
      {basketCtx.products.map((product) => (
        <BasketItem
          key={product.id}
          name={product.name}
          amount={product.amount}
          price={product.price}
          onAdd={addProductHandler.bind(null, product)}
          onRemove={removeProductHandler.bind(null, product.id)}
        />
      ))}
    </ul>
  );

  // const continueToPayment = () => {
  //   basketCtx.products.map((product) => (
      
  //   ))
  // }

  return (
    <Modal onClose={props.onClose}>
      {productsInBasket}
      <div className={styles.total}>
        <span>Total Cost: </span>
        <span>{total}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.closeBtn} onClick={props.onClose}>
          Close
        </button>
        {hasProducts && <button className={styles.button} onClick={continueToPayment}>Continue</button>}
      </div>
    </Modal>
  );
};

export default Basket;
