import { useContext } from "react";
import AddProductForm from "./AddProductForm";
import styles from "./ProductItem.module.css";
import BasketContext from "../../store/basket-context";

const ProductItem = (props) => {
  const basketCtx = useContext(BasketContext);
  const price = `€${parseFloat(props.price).toFixed(2)}`;

  const addToBasketHandler = (amount) => {
    basketCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={styles.product} key={props.id}>
      <div>
        <img src={props.prodImg} alt="Pic of the product" />
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <AddProductForm onAddToBasket={addToBasketHandler} />
      </div>
    </li>
  );
};

export default ProductItem;
