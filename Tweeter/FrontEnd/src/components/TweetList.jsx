import TweetItem from "./TweetItem";

export default function TweetList({ tweets, refresh }) {
  if (!tweets || tweets.length === 0) {
    return <div className="mt-3">No tweets yet — be the first!</div>;
  }
  return (
    <div className="mt-3">
      {tweets.map((t) => (
        <TweetItem key={t.id} tweet={t} refresh={refresh} />
      ))}
    </div>
  );
}
