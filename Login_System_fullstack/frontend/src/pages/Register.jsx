import React from "react";
import { signup } from "../api";
export default () => (
  <form onSubmit={async e=>{e.preventDefault();alert(JSON.stringify(await signup({email:e.target.email.value,password:e.target.password.value})));}}>
    <h2>Register</h2><input name="email"/><input name="password"/><button>Register</button>
  </form>
);
