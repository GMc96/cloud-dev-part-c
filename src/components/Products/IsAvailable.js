import Card from "../UI/Card";
import ProductItem from "./ProductItem";
import styles from "./IsAvailable.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

const IsAvailable = () => {
  const [prods, setProds] = useState();

  useEffect(() => {
    const gprods = process.env.REACT_APP_GPRODS;
    axios.get(gprods)
    .then((response) => {
      JSON.stringify(response.data)
      setProds(response.data);
      console.log(response.data)
    });
  }, []);

  let productsList = []; 

  productsList = prods && prods.map((product) => (

    <ProductItem
      id={JSON.stringify(product.prodId).slice(6, -2)}
      key={JSON.stringify(product.prodId).slice(6, -2)}
      name={JSON.stringify(product.name).slice(6, -2)}
      description={JSON.stringify(product.description).slice(6, -2)}
      price={parseFloat(product.price).toFixed(2)}
      prodImg={JSON.stringify(product.prodImg).slice(6, -2)}
    />
  ));

  return (
    <section className={styles.products}>
      <Card>
        <ul>{productsList}</ul>
      </Card>
    </section>
  );
};

export default IsAvailable;









// const DUMMY_PRODUCTS = [
//   {
//     id: 1,
//     name: "Sliced Pan White 800G",
//     description:
//       "Family Pan Premium White Bread. No added sugar. Contains naturally occurring sugars",
//     price: 1.99,
//   },
//   {
//     id: 2,
//     name: "Fun-Sized Apples 10 Pack",
//     description:
//       "Fun-Sized Apples 10 Pack, Apples Goodness",
//     price: 1.59,
//   },
//   {
//     id: 3,
//     name: "Fun-Sized Pears Min 7 Pack",
//     description:
//       "To ripen pears, place in a fruit bowl at room temperature.",
//     price: 1.09,
//   },
//   {
//     id: 4,
//     name: "Wheat Biscuits 36",
//     description:
//       "We love breakfast. That's why we only work with millers who take pride in what they do and select the most flavourful grains for your cereals like they've been doing for decades.",
//     price: 2.69,
//   },
//   {
//     id: 5,
//     name: "Fusilli Pasta Twists 1Kg",
//     description:
//       "Dried fusilli pasta made from durum wheat semolina. Made in Italy A versatile shape that can be served hot or cold Pack size: 1KG",
//     price: 1.19,
//   },
// ];