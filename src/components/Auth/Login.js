//import styles from "./Login.module.css";
import React from "react";

function Login() {
  const submitHandler = () => {};

  return (
    <>
    <h2>Login</h2>
      <form onSubmit={submitHandler}>
        <label>
          <p>Email</p>
          <input type="email" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
}

export default Login;
