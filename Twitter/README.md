<h1>
🐦 Mini Twitter Clone — Full Stack Project</h1>

A simple Twitter-like application built using Node.js + Express (Backend) and React (Frontend) that allows users to create, update, delete, and view tweets.
<h2>Demo video</h2>



https://github.com/user-attachments/assets/1f554a25-9450-4639-b59e-f6713448b946


<h2>📌 Project Overview</h2>

This project implements a Mini Twitter Home Timeline, where users can:

✔ Add a Tweet<br>
✔ Edit a Tweet<br>
✔ Delete a Tweet<br>
✔ View All Tweets<br>

The backend stores tweets in a JSON file, and the frontend displays them in a clean, Twitter-inspired UI.

<h2>🏗 Tech Stack</h2>
<ul  type="circle">
  <li>Backend</li>

<li>Node.js</li>

<li>Express.js (ES Modules)</li>

<li>fs (File System – Core Module)</li>

<li>path (Core Module)</li>

<li>User-defined service modules</li>

<li>Frontend</li>

<li>React.js</li>

<li>Fetch API</li>

<li>CSS / Tailwind / Bootstrap (any optional styling)</li>
</ul>

``` markdown
📁 Project Structure
project/
 ├─ backend/
 │    ├─ app.js
 │    ├─ routes/
 │    │     └─ tweetRoutes.js
 │    ├─ middleware/
 │    │     ├─ logger.js
 │    │     └─ validateTweet.js
 │    ├─ services/
 │    │     └─ tweetService.js
 │    ├─ data/
 │    │     └─ tweets.json
 │    └─ package.json
 └─ frontend/
      └─ React App (components, pages, etc.)
```

<h2>🚀 Backend Requirements</h2>
1. CRUD API Endpoints<br>
1️⃣ GET /api/tweets<br>
Returns all tweets<br>
Reads from data/tweets.json<br>

2️⃣ POST /api/tweets<br>
Creates a new tweet<br>
Required fields:<br>
Field	Type	Required<br>
username	string	✔<br>
tweet	string	✔<br>
Adds createdAt automatically<br>
Stores the new tweet in tweets.json<br>

3️⃣ PUT /api/tweets/:id<br>
Updates an existing tweet<br>
Only tweet content can be edited<br>
Marks the tweet as edited<br>

4️⃣ DELETE /api/tweets/:id<br>
Deletes tweet by ID<br>
Saves updated list in tweets.json<br>

<h2>🛡 Middleware Requirements</h2>
1. Application-Level Middleware (logger.js)<br>

Logs:<br>

METHOD  URL  TIME<br>


Example:<br>

POST /api/tweets   10:45:22 AM<br>

2. Route-Level Middleware (validateTweet.js)<br>

Used on POST and PUT:<br>

✔ Check if tweet is provided<br>
✔ Check if tweet length ≥ 5 characters<br>
✔ Check if username is not empty (POST only)<br>

Validation errors return:<br>

400 Bad Request<br>

💾 File-Based Database<br>

All tweets are stored inside:<br>

backend/data/tweets.json<br>


The backend uses fs + path modules to read/write tweet data.<br>

Example search service:<br>

readTweets()<br>

writeTweets()<br>
<h2>
🎨 Frontend Requirements (React)</h2>

<h3>✔ Tweet Input Form</h3>

Fields:<br>

Username<br>

Tweet Content<br>

Submit Button<br>

<h3>✔ Tweet List</h3>

Each tweet card must show:<br>

Username<br>

Tweet text<br>

Created time<br>

"Edited" badge (if tweet was updated)<br>

Edit button<br>

Delete button<br>

<h2>🔄 Fetch API Usage</h2>

Frontend must use Fetch API:<br>

Example:<br>

fetch("/api/tweets")<br>


No full URL required if proxy is configured.<br>

<h2>⭐ Bonus Features (Optional)</h2>

Bootstrap UI<br>

280-character limit like Twitter<br>

Live character counter<br>

Highlight edited tweets<br>

<h3>▶ How to Run the Project</h3>
  Backend<br>
      cd backend<br>
      npm install<br>
      npm start<br>


By default backend runs at:<br>

http://localhost:5000<br>

  Frontend<br>
      cd frontend<br>
      npm install<br>
      npm start<br>


Runs at:<br>

http://localhost:5173<br>


If proxy is added in frontend/package.json:<br>

"proxy": "http://localhost:5000"<br>


You can call APIs directly:<br>

fetch("/api/tweets")<br>

<h2>🎉 Final Deliverables</h2>

✔ Working Express Backend<br>
✔ Working React Frontend<br>
✔ CRUD Operations<br>
✔ Middleware Implemented<br>
✔ tweets.json acting as database<br>
✔ Fully functional UI similar to Twitter Home<br>
✔ Clean validation and proper logging<br>
