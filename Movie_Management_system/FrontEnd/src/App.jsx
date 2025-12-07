import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieForm from "./components/MovieForm";
import MovieDetails from "./components/MovieDetails";

export default function App() {
  return (
    <div className="container">
      <header>
        <h1>Movie Management System</h1>
        <nav>
          <Link to="/">Movies</Link>
          <Link to="/add">Add Movie</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/add" element={<MovieForm />} />
          <Route path="/edit/:id" element={<MovieForm editMode />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </main>
    </div>
  );
}
