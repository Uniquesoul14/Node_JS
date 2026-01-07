
import { login } from "../api";import { useNavigate } from "react-router-dom";
export default () => {
  const nav = useNavigate();
  return (
    <form onSubmit={async e=>{e.preventDefault();const r=await login({email:e.target.email.value,password:e.target.password.value});if(r.token){localStorage.setItem("token",r.token);nav("/home");}}}>
      <h2>Login</h2><input name="email"/><input name="password"/><button>Login</button>
    </form>
  );
};
