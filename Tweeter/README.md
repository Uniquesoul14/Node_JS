<h1>
🐦 Mini Twitter Clone — Full Stack Project</h1>

A simple Twitter-like application built using Node.js + Express (Backend) and React (Frontend) that allows users to create, update, delete, and view tweets.

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
1. CRUD API Endpoints
1️⃣ GET /api/tweets

Returns all tweets

Reads from data/tweets.json

2️⃣ POST /api/tweets

Creates a new tweet

Required fields:

Field	Type	Required
username	string	✔
tweet	string	✔

Adds createdAt automatically

Stores the new tweet in tweets.json

3️⃣ PUT /api/tweets/:id

Updates an existing tweet

Only tweet content can be edited

Marks the tweet as edited

4️⃣ DELETE /api/tweets/:id

Deletes tweet by ID

Saves updated list in tweets.json

🛡 Middleware Requirements
1. Application-Level Middleware (logger.js)

Logs:

METHOD  URL  TIME


Example:

POST /api/tweets   10:45:22 AM

2. Route-Level Middleware (validateTweet.js)

Used on POST and PUT:

✔ Check if tweet is provided
✔ Check if tweet length ≥ 5 characters
✔ Check if username is not empty (POST only)

Validation errors return:

400 Bad Request

💾 File-Based Database

All tweets are stored inside:

backend/data/tweets.json


The backend uses fs + path modules to read/write tweet data.

Example search service:

readTweets()

writeTweets()

🎨 Frontend Requirements (React)
Features
✔ Tweet Input Form

Fields:

Username

Tweet Content

Submit Button

✔ Tweet List

Each tweet card must show:

Username

Tweet text

Created time

"Edited" badge (if tweet was updated)

Edit button

Delete button

🔄 Fetch API Usage

Frontend must use Fetch API:

Example:

fetch("/api/tweets")


No full URL required if proxy is configured.

⭐ Bonus Features (Optional)

Tailwind or Bootstrap UI

280-character limit like Twitter

Live character counter

Highlight edited tweets

▶ How to Run the Project
Backend
cd backend
npm install
npm start


By default backend runs at:

http://localhost:5000

Frontend
cd frontend
npm install
npm start


Runs at:

http://localhost:3000


If proxy is added in frontend/package.json:

"proxy": "http://localhost:5000"


You can call APIs directly:

fetch("/api/tweets")

🎉 Final Deliverables

✔ Working Express Backend
✔ Working React Frontend
✔ CRUD Operations
✔ Middleware Implemented
✔ tweets.json acting as database
✔ Fully functional UI similar to Twitter Home
✔ Clean validation and proper logging
