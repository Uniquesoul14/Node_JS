import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";
import TweetInput from "./components/TweetInput";
import TweetList from "./components/TweetList";
import { useEffect, useState } from "react";

export default function App() {
  const [tweets, setTweets] = useState([]);

  const fetchTweets = async () => {
    const res = await fetch("/api/tweets");
    const data = await res.json();
    setTweets(data);
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  return (
    <div className="d-flex">
      <SidebarLeft />
      <main style={{ marginLeft: 260, marginRight: 360, width: "100%" }}>
        <div className="container">
          <h3 className="mt-3">Home</h3>
          <TweetInput refresh={fetchTweets} />
          <TweetList tweets={tweets} refresh={fetchTweets} />
        </div>
      </main>
      <SidebarRight />
    </div>
  );
}
