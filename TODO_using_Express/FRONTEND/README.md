<h1>TODO_using_Express</h1>

This is a simple Todo API built using Node.js, Express, and a basic in-memory storage system.
The API allows you to create, read, update, delete todos easily.

<h2>🚀 Features</h2>

Get all todos<br>
Get a single todo by ID<br>
Create a new todo<br>
Update an existing todo<br>
Delete a todo<br>
Reset all todos (for testing)<br>
CORS enabled<br>
JSON request body support<br>



<h2>🏗 Tech Used</h2>
Node.js<br>
Express.js<br>
CORS<br>
Express Router<br>
<h2>📦 API Base URL</h2>
/api/todos<br>

<h2>🔥 Available Endpoints</h2>
1️⃣ Get all todos<br>
      GET /api/todos<br>
2️⃣ Get one todo<br>
      GET /api/todos/:id<br>
3️⃣ Create a todo<br>
      POST /api/todos<br>

<h2>Body example:</h2>
{<br>
  "title": "Learn Node",<br>
  "priority": "High",<br>
  "status": "Pending"<br>
}<br>

4️⃣ Update a todo<br>
        PUT /api/todos/:id<br>
5️⃣ Delete a todo<br>
        DELETE /api/todos/:id<br>
6️⃣ Reset all todos<br>
        POST /api/todos/_reset<br>
▶️ How to Run<br>


<h2>Install dependencies:</h2><br>
npm install<br>
Start the server:<br>
node server.js<br>
Server will run on:<br>
http://localhost:5000<br>


<h2>✔ Home Route</h2>
GET /<br>

<h2>Response:</h2>
Todo API is running<br>

<h2>Demo video</h2>


https://github.com/user-attachments/assets/209d6a62-e94f-49c8-af05-485680899d03

