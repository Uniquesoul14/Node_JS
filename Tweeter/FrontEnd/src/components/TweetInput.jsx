import { useState } from "react";

export default function TweetInput({ refresh }) {
  const [username, setUsername] = useState("");
  const [tweet, setTweet] = useState("");
  const [chars, setChars] = useState(0);
  const MAX = 280;

  const submit = async (e) => {
    e.preventDefault();
    if (!username.trim() || !tweet.trim()) return alert("Both fields are required");
    if (tweet.trim().length < 5) return alert("Tweet must be at least 5 characters");

    const res = await fetch("/api/tweets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username.trim(), tweet: tweet.trim() }),
    });
    if (!res.ok) {
      const err = await res.json();
      return alert(err.error || "Failed to post tweet");
    }
    setTweet("");
    setChars(0);
    refresh();
  };

  return (
    <form className="tweet-box" onSubmit={submit}>
      <input className="form-control mb-2" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} />
      <textarea
        className="form-control mb-2"
        placeholder="What's happening?"
        value={tweet}
        onChange={(e)=>{ setTweet(e.target.value); setChars(e.target.value.length); }}
        maxLength={MAX}
        rows={3}
      />
      <div className="d-flex justify-content-between align-items-center">
        <div className="emoji-bar">😀 😊 🎉 📷 GIF 📍</div>
        <div>
          <small className="text-muted me-3">{chars}/{MAX}</small>
          <button className="btn btn-primary" type="submit">Tweet</button>
        </div>
      </div>
    </form>
  );
}
