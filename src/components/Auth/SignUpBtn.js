import styles from "./LoginBtn.module.css";
import { MdLogin } from "react-icons/md";

const SignUpBtn = (props) => {
  return (
    <button className={styles.button} onClick={props.onOpenSignUp}>
      <span className={styles.icon}>
        <MdLogin size={20} />
      </span>
      <span>SignUp</span>
    </button>
  );
};

export default SignUpBtn;
