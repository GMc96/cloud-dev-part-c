import styles from "./BasketItem.module.css";

const BasketItem = (props) => {
  const price = `$${parseFloat(props.price).toFixed(2)}`;

  return (
    <li className={styles.basketItem}>
      <div>
        <h2>{props.name}</h2>
        <div className={styles.description}>
          <span className={styles.price}>{price}</span>
          <span className={styles.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default BasketItem;
