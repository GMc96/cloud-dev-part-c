import styles from "./LoginBtn.module.css";
import { MdLogin } from "react-icons/md";

const LoginBtn = (props) => {
  return (
    <button className={styles.button} onClick={props.onOpenLogin}>
      <span className={styles.icon}>
        <MdLogin size={20} />
      </span>
      <span>Login</span>
    </button>
  );
};

export default LoginBtn;
