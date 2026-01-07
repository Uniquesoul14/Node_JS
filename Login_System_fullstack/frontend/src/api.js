
const API = "http://localhost:5000/api/auth";
export const signup = d => fetch(`${API}/signup`, {method:"POST",headers:{'Content-Type':'application/json'},body:JSON.stringify(d)}).then(r=>r.json());
export const verifyOtp = d => fetch(`${API}/verify-otp`, {method:"POST",headers:{'Content-Type':'application/json'},body:JSON.stringify(d)}).then(r=>r.json());
export const login = d => fetch(`${API}/login`, {method:"POST",headers:{'Content-Type':'application/json'},body:JSON.stringify(d)}).then(r=>r.json());
export const home = () => fetch(`${API}/home`, {headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}}).then(r=>r.json());
