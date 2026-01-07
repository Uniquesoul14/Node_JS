
import { home } from "../api";
export default () => (
  <div>
    <h2>Home</h2>
    <button onClick={async()=>alert(JSON.stringify(await home()))}>Load</button>
  </div>
);
