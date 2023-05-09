import { Fragment } from "react";
import groceriesImg from "../../assets/groceries.jpeg";
import logo from "../../assets/TheShopLogo.png";
import styles from "./Header.module.css";
import BasketBtn from "./BasketBtn";
// import LoginBtn from "../Auth/LoginBtn";
// import SignUpBtn from "../Auth/SignUpBtn";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <img src={logo} alt="the store logo" />
        <h1>The Shop</h1>
        <div className={styles.btnContainer}>
          <BasketBtn onClick={props.onOpenBasket} />
          {/* <LoginBtn onOpenLogin={props.onOpenLogin} />
          <SignUpBtn onOpenSignUp={props.onOpenSignUp}/> */}
        </div>
      </header>
      <div className={styles.backImg}>
        <img src={groceriesImg} alt="groceries" />
      </div>
    </Fragment>
  );
};

export default Header;
