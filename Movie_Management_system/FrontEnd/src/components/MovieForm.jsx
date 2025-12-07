import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createMovie, fetchMovie, updateMovie, posterUrl } from "../api";

export default function MovieForm({ editMode }) {
  const { id } = useParams();
  const [form, setForm] = useState({ title: "", description: "", genre: "", releaseYear: "" });
  const [posterPreview, setPosterPreview] = useState(null);
  const [posterFile, setPosterFile] = useState(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (editMode && id) {
      (async () => {
        const res = await fetchMovie(id);
        if (res.success) {
          const data = res.data;
          setForm({
            title: data.title || "",
            description: data.description || "",
            genre: data.genre || "",
            releaseYear: data.releaseYear || "",
          });
          if (data.poster) setPosterPreview(posterUrl(data.poster));
        } else {
          alert(res.message || "Failed to fetch movie");
        }
      })();
    }
  }, [editMode, id]);

  const validate = () => {
    const e = {};
    if (!form.title || form.title.trim().length < 2) e.title = "Title required (min 2 chars)";
    if (form.releaseYear && !/^\d{4}$/.test(String(form.releaseYear))) e.releaseYear = "Enter a 4-digit year";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onFileChange = (e) => {
    const f = e.target.files[0];
    setPosterFile(f);
    if (f) setPosterPreview(URL.createObjectURL(f));
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    const data = new FormData();
    data.append("title", form.title);
    data.append("description", form.description);
    data.append("genre", form.genre);
    data.append("releaseYear", form.releaseYear);
    if (posterFile) data.append("poster", posterFile);

    if (editMode && id) {
      const res = await updateMovie(id, data);
      if (res.success) navigate("/");
      else alert(res.message || "Update failed");
    } else {
      const res = await createMovie(data);
      if (res.success) navigate("/");
      else alert(res.message || "Create failed");
    }
  };

  return (
    <div className="form">
      <h2>{editMode ? "Edit Movie" : "Add Movie"}</h2>
      <form onSubmit={onSubmit}>
        <label>Title</label>
        <input value={form.title} onChange={e => setForm({...form, title: e.target.value})} />
        {errors.title && <div className="small" style={{color:"red"}}>{errors.title}</div>}

        <label>Description</label>
        <textarea value={form.description} rows={4} onChange={e => setForm({...form, description: e.target.value})} />

        <label>Genre</label>
        <input value={form.genre} onChange={e => setForm({...form, genre: e.target.value})} />

        <label>Release Year</label>
        <input value={form.releaseYear} onChange={e => setForm({...form, releaseYear: e.target.value})} />

        <label>Poster (image)</label>
        <input type="file" accept="image/*" onChange={onFileChange} />

        {posterPreview && <div style={{marginTop:8}}><img src={posterPreview} alt="preview" style={{width:200, height:300, objectFit:"cover"}} /></div>}

        <div className="buttons">
          <button type="submit" className="btn-primary">{editMode ? "Update" : "Create"}</button>
          <button type="button" onClick={() => navigate(-1)} style={{marginLeft:8}}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
