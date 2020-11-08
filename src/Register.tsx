import React from "react";

export default function Register() {
  return (
    <React.Fragment>
      <header>
        <h1>Register</h1>
      </header>
      <form method="post">
        <label htmlFor="username">Username</label>
        <input name="username" id="username" required />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" required />
        <input type="submit" value="Register" />
      </form>
    </React.Fragment>
  );
}
