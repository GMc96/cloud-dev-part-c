import { useContext } from "react";
import BasketContext from "../../store/basket-context";

import { MdShoppingBasket } from "react-icons/md";
import styles from "./BasketBtn.module.css";

const BasketBtn = (props) => {
  const basketCtx = useContext(BasketContext);

  const productsInBasket = basketCtx.products.reduce(
    (currentNumber, product) => {
      return currentNumber + product.amount;
    },
    0
  );

  const continueToPayment = () => {
    
  }

  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <MdShoppingBasket size={20} />
      </span>
      <span>Basket</span>
      <span className={styles.productsInBasket} onClick={continueToPayment}>{productsInBasket}</span>
    </button>
  );
};

export default BasketBtn;
