
import { verifyOtp } from "../api";
export default () => (
  <form onSubmit={async e=>{e.preventDefault();alert(JSON.stringify(await verifyOtp({email:e.target.email.value,otp:e.target.otp.value})));}}>
    <h2>Verify OTP</h2><input name="email"/><input name="otp"/><button>Verify</button>
  </form>
);
