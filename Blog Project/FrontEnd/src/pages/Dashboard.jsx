import { useEffect, useState } from "react";
import { apiFetch } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  const loadBlogs = async () => {
    const res = await fetch("http://localhost:5000/api/blogs");
    setBlogs(await res.json());
  };

  const createBlog = async e => {
    e.preventDefault();
    const form = new FormData(e.target);

    await apiFetch("/blogs", {
      method: "POST",
      body: form
    });

    e.target.reset();
    loadBlogs();
  };

  const logout = async () => {
    await apiFetch("/auth/logout", { method: "POST" });
    navigate("/");
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  return (
    <div className="container">
      <h2>Dashboard</h2>

      <form onSubmit={createBlog}>
        <input name="title" placeholder="Title" required />
        <textarea name="content" placeholder="Content" required></textarea>
        <input name="image" type="file" />
        <button>Create Blog</button>
      </form>

      <button onClick={logout}>Logout</button>

      {blogs.map(b => (
        <div className="card" key={b._id}>
          <h3>{b.title}</h3>
          <p>{b.content}</p>
          {b.imagePath && (
            <img src={`http://localhost:5000/${b.imagePath}`} />
          )}
        </div>
      ))}
    </div>
  );
}
