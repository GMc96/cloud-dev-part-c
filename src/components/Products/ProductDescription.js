import styles from "./ProductDescription.module.css";

const ProductDescription = () => {
  return (
    <section className={styles.summary}>
      <h2>Fresh Products, Delivered To You</h2>
      <p>
        Choose from our wide range of products what you would like to be
        delivered to you by one of our trusted drivers.
      </p>
    </section>
  );
};

export default ProductDescription;