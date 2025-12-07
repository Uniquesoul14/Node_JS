const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

export async function fetchMovies(search = "") {
  const url = `${API_BASE}/api/movies${search ? `?search=${encodeURIComponent(search)}` : ""}`;
  const res = await fetch(url);
  return res.json();
}

export async function fetchMovie(id) {
  const res = await fetch(`${API_BASE}/api/movies/${id}`);
  return res.json();
}

export async function createMovie(formData) {
  const res = await fetch(`${API_BASE}/api/movies`, {
    method: "POST",
    body: formData,
  });
  return res.json();
}

export async function updateMovie(id, formData) {
  const res = await fetch(`${API_BASE}/api/movies/${id}`, {
    method: "PUT",
    body: formData,
  });
  return res.json();
}

export async function deleteMovie(id) {
  const res = await fetch(`${API_BASE}/api/movies/${id}`, {
    method: "DELETE",
  });
  return res.json();
}

export function posterUrl(filename) {
  if (!filename) return "";
  return `${API_BASE}/uploads/${filename}`;
}
