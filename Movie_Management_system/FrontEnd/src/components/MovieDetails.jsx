import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchMovie, posterUrl } from "../api";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await fetchMovie(id);
      if (res.success) setMovie(res.data);
      else alert(res.message || "Failed to load movie");
    })();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <Link to="/">← Back</Link>
      <h2>{movie.title}</h2>
      {movie.poster && <img src={posterUrl(movie.poster)} alt={movie.title} style={{width:300, height:450, objectFit:"cover"}} />}
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Release Year:</strong> {movie.releaseYear}</p>
      <p>{movie.description}</p>
    </div>
  );
}
