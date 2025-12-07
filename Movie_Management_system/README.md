<h1>🎬 Movie Management Application</h1>

<p>
  This project is a full-stack Movie Management Application built using 
  <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>MongoDB</strong>, and a 
  <strong>Vite + React</strong> frontend.  
  It allows users to upload movie details along with posters, view all movies, and delete movies — 
  including automatic removal of the poster image from the server's file storage.
</p>

<hr />

<h2>🚀 Features</h2>
<ul>
  <li>Add new movies with title, description, and poster image.</li>
  <li>Store poster images on disk using <strong>Multer</strong>.</li>
  <li>Store movie data in <strong>MongoDB</strong>.</li>
  <li>Delete movies:
    <ul>
      <li>Removes file from local storage</li>
      <li>Deletes the movie record from MongoDB</li>
      <li>Instantly updates the frontend using React state</li>
    </ul>
  </li>
  <li>Modern frontend bundled with <strong>Vite</strong>.</li>
</ul>

<hr />

<h2>📁 Project Structure</h2>

<pre>
backend/
│
├── server.js               → Express server entry
├── routes/
│     └── movieRoutes.js    → All movie API endpoints
├── models/
│     └── Movie.js          → Mongoose schema for movies
├── controllers/
│     └── movieController.js → Create, delete, and fetch logic
├── uploads/                → Stored movie poster files
└── config/
      └── db.js             → MongoDB connection

frontend/
│
├── src/
│    ├── App.jsx            → Main React component
│    ├── components/
│    │       ├── MovieForm.jsx
│    │       ├── MovieList.jsx
│    │       └── MovieCard.jsx
│    └── api.js             → Axios API functions
└── vite.config.js
</pre>

<hr />

<h2>🛠️ Tech Stack</h2>
<ul>
  <li><strong>Frontend:</strong> React, Vite, Axios</li>
  <li><strong>Backend:</strong> Node.js, Express.js, Multer</li>
  <li><strong>Database:</strong> MongoDB + Mongoose</li>
  <li><strong>Other Tools:</strong> Nodemon, CORS</li>
</ul>

<hr />

<h2>📌 API Endpoints</h2>

<h3>POST /api/movies</h3>
<p>Upload a new movie with poster</p>

<h3>GET /api/movies</h3>
<p>Fetch all movies</p>

<h3>DELETE /api/movies/:id</h3>
<p>Delete movie + delete image file from storage</p>

<hr />

<h2>⚙️ How to Run</h2>

<h3>Backend Setup</h3>
<pre>
cd backend
npm install
npm start
</pre>

<h3>Frontend Setup</h3>
<pre>
cd frontend
npm install
npm run dev
</pre>

<hr />

<h2>📸 Image Handling</h2>
<ul>
  <li>Multer saves files in <code>/uploads</code> folder</li>
  <li>Backend stores image filename inside MongoDB</li>
  <li>Delete movie → file and DB entry are removed</li>
  <li>Frontend state auto-updates:
    <pre>setMovies(prev => prev.filter(m => m._id !== id));</pre>
  </li>
</ul>

<hr />

<h2>🙌 Author</h2>
<p>Developed for practice and learning CRUD operations with file uploads.</p>
