import { apiFetch } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const register = async e => {
    e.preventDefault();
    await apiFetch("/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value
      })
    });
    alert("Registered successfully");
  };

  const login = async e => {
    e.preventDefault();
    const res = await apiFetch("/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value
      })
    });

    if (res.ok) navigate("/dashboard");
    else alert("Login failed");
  };

  return (
    <div className="container">
      <h2>Blog Management System</h2>

      <form onSubmit={register}>
        <h3>Register</h3>
        <input name="name" placeholder="Name" required />
        <input name="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Password" required />
        <button>Register</button>
      </form>

      <form onSubmit={login}>
        <h3>Login</h3>
        <input name="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Password" required />
        <button>Login</button>
      </form>
    </div>
  );
}
