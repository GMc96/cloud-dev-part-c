import React from "react";

function SignUp() {
  const submitHandler = () => {};

  return (
    <>
    <h2>Sign Up</h2>
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

export default SignUp;