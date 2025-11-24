export default function TweetItem({ tweet, refresh }) {
  const handleDelete = async () => {
    if (!confirm("Delete this tweet?")) return;
    const res = await fetch(`/api/tweets/${tweet.id}`, { method: "DELETE" });
    if (res.status === 204 || res.ok) refresh();
    else alert("Delete failed");
  };

  const handleEdit = async () => {
    const newText = prompt("Edit tweet:", tweet.tweet);
    if (newText === null) return; 
    if (newText.trim().length < 5) return alert("Tweet must be at least 5 characters");
    const res = await fetch(`/api/tweets/${tweet.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tweet: newText.trim() })
    });
    if (!res.ok) {
      const err = await res.json();
      return alert(err.error || "Update failed");
    }
    refresh();
  };

  return (
    <div className="tweet-box mb-2">
      <div className="d-flex justify-content-between">
        <div>
          <strong>@{tweet.username}</strong>
          {tweet.edited && <span className="badge bg-secondary ms-2">Edited</span>}
          <div className="small text-muted">{new Date(tweet.createdAt).toLocaleString()}</div>
        </div>
        <div>
          <button className="icon-btn me-2" title="Edit" onClick={handleEdit}>✏️</button>
          <button className="icon-btn" title="Delete" onClick={handleDelete}>🗑️</button>
        </div>
      </div>
      <p className="mt-2">{tweet.tweet}</p>
    </div>
  );
}
