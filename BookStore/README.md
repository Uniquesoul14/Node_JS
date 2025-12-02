<h1>📚 Bookstore API</h1>

<p>A simple RESTful API built using <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB (Mongoose)</strong> to manage books.  
This backend provides CRUD operations and a sample data seeding route.</p>

<hr>

<h2>🚀 Features</h2>
<ul>
  <li>➕ Add a book</li>
  <li>📄 Get all books</li>
  <li>✏️ Update a book</li>
  <li>❌ Delete a book</li>
  <li>🌱 Seed sample books</li>
  <li>🧩 Custom logger middleware</li>
  <li>📁 Clean folder structure (MVC pattern)</li>
</ul>

<hr>

<h2>📁 Project Structure</h2>

<pre>
bookstore/
│
├── package.json
├── server.js
│
├── config/
│   └── db.js
│
├── models/
│   └── Book.model.js
│
├── controllers/
│   └── Book.controller.js
│
├── routes/
│   └── Book.routes.js
│
└── middleware/
    └── logger.js
</pre>

<hr>

<h2>🛠 Tech Stack</h2>
<ul>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>MongoDB</li>
  <li>Mongoose</li>
  <li>Nodemon</li>
  <li>CORS</li>
</ul>

<hr>

<h2>📦 Installation</h2>

<h3>1️⃣ Install dependencies</h3>
<pre><code>npm install</code></pre>

<h3>2️⃣ Start the server</h3>

<p>Development mode:</p>
<pre><code>npm run dev</code></pre>

<p>Production mode:</p>
<pre><code>npm start</code></pre>

<p>Server runs at:</p>
<pre><code>http://localhost:5000</code></pre>

<hr>

<h2>🗄 MongoDB Setup</h2>
<p>Default connection URL:</p>
<pre><code>mongodb://localhost:27017/bookstore</code></pre>

<hr>

<h2>🧩 API Endpoints</h2>

<p>Base URL:</p>
<pre><code>http://localhost:5000/api/books</code></pre>

<h3>CRUD Routes</h3>

<table>
  <tr>
    <th>Method</th>
    <th>Endpoint</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>GET</td>
    <td>/</td>
    <td>Get all books</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>/</td>
    <td>Add a new book</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>/:id</td>
    <td>Update a book</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>/:id</td>
    <td>Delete a book</td>
  </tr>
</table>

<hr>

<h2>🌱 Seed Sample Data</h2>
<p>Insert predefined sample books:</p>
<pre><code>GET /api/books/seed</code></pre>

<hr>

<h2>📗 Book Model Structure</h2>

<table>
  <tr>
    <th>Field</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td>title</td>
    <td>String</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>author</td>
    <td>String</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>price</td>
    <td>Number</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>category</td>
    <td>String</td>
    <td>No</td>
  </tr>
  <tr>
    <td>publishYear</td>
    <td>Number</td>
    <td>No</td>
  </tr>
</table>

<hr>

<h2>🧰 Logger Middleware</h2>
<p>Logs each visited route:</p>
<pre><code>📌 GET /api/books
📌 POST /api/books
</code></pre>

<hr>

<h2>👨‍💻 Author</h2>
<p><strong>Soumya</strong> – Bookstore API Developer</p>
 