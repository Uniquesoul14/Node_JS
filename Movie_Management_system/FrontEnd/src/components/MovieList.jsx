import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchMovies, deleteMovie, posterUrl } from "../api";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const load = async (search = "") => {
    setLoading(true);
    const res = await fetchMovies(search);
    if (res.success) setMovies(res.data);
    else alert(res.message || "Failed to load movies");
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const onSearch = (e) => {
    e.preventDefault();
    load(q);
  };

  const onDelete = async (id) => {
    if (!window.confirm("Delete this movie?")) return;
    const res = await deleteMovie(id);
    if (res.success) {
      setMovies(prev => prev.filter(m => m._id !== id));
    } else {
      alert(res.message || "Delete failed");
    }
  };

  return (
    <div>
      <div className="search">
        <form onSubmit={onSearch}>
          <input placeholder="Search by title..." value={q} onChange={e => setQ(e.target.value)} />
          <button className="btn-primary" style={{marginLeft:8}}>Search</button>
          <button type="button" onClick={() => { setQ(""); load(); }} style={{marginLeft:8}}>Clear</button>
        </form>
      </div>

      {loading ? <p>Loading...</p> : (
        <div className="movie-grid">
          {movies.map(m => (
            <div className="card" key={m._id}>
              {m.poster ? <img src={posterUrl(m.poster)} alt={m.title} /> : <div style={{height:300, background:"#eee", borderRadius:6}} />}
              <h3>{m.title}</h3>
              <p className="small">{m.genre} • {m.releaseYear}</p>
              <p>{m.description?.slice(0,120)}</p>
              <div style={{marginTop:8}}>
                <Link to={`/movies/${m._id}`}><button>View</button></Link>
                <button onClick={() => navigate(`/edit/${m._id}`)} style={{marginLeft:8}}>Edit</button>
                <button className="btn-danger" onClick={() => onDelete(m._id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
