
<h1 align="center">🔐 Full Stack Login System (OTP + JWT)</h1>

<p align="center">
A secure full stack authentication system built using <b>React</b>, <b>Node.js</b>, <b>Express</b>, and <b>MongoDB Atlas</b>.
</p>

<hr/>

<h2>📌 Project Overview</h2>
<p>
This project implements a complete authentication system including user registration,
OTP verification, JWT-based login, and protected routes.  
It follows industry-level security practices and is suitable for academic projects,
exams, and interviews.
</p>

<hr/>
<h2>Demo video</h2>




https://github.com/user-attachments/assets/d7a6ee5a-d621-4102-9a77-2b6d1377a5f6






<h2>✅ Key Features</h2>
<ul>
  <li>User registration with email and password</li>
  <li>Password encryption using <b>bcrypt</b></li>
  <li>OTP generation and verification for email validation</li>
  <li>JWT token generation after successful login</li>
  <li>Protected routes using JWT middleware</li>
  <li>Logout functionality (client-side token removal)</li>
  <li>MongoDB Atlas cloud database</li>
  <li>Minimal React frontend (Register, Login, OTP Verify)</li>
  <li>Proper error handling and validation</li>
</ul>

<hr/>

<h2>🔄 Authentication Flow</h2>

<h3>1️⃣ Signup</h3>
<ul>
  <li>User registers with email and password</li>
  <li>Password is hashed using bcrypt</li>
  <li>OTP is generated and stored in the database</li>
</ul>

<h3>2️⃣ OTP Verification</h3>
<ul>
  <li>User submits OTP</li>
  <li>OTP is verified from MongoDB</li>
  <li>User account is marked as verified</li>
</ul>

<h3>3️⃣ Login</h3>
<ul>
  <li>User logs in using email and password</li>
  <li>Password is compared using bcrypt</li>
  <li>JWT token is generated on success</li>
</ul>

<h3>4️⃣ Access Protected Routes</h3>
<ul>
  <li>JWT token is sent in request headers</li>
  <li>Middleware validates token</li>
  <li>Access is allowed only if token is valid</li>
</ul>

<hr/>

<h2>🛠️ Technology Stack</h2>

<h3>Backend</h3>
<ul>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>MongoDB Atlas</li>
  <li>Mongoose</li>
  <li>JWT (jsonwebtoken)</li>
  <li>bcryptjs</li>
</ul>

<h3>Frontend</h3>
<ul>
  <li>React (Vite)</li>
  <li>React Router DOM</li>
  <li>Axios</li>
</ul>

<hr/>

<h2>🔒 Security Implementation</h2>
<ul>
  <li>Passwords are hashed with bcrypt and salt</li>
  <li>JWT-based stateless authentication</li>
  <li>OTP verification for user validation</li>
  <li>Protected routes using JWT middleware</li>
  <li>Sensitive data stored in <code>.env</code> file</li>
  <li>Unauthorized access prevention</li>
</ul>

<hr/>

<h2>📂 Project Folder Structure</h2>

<pre>
Login_System_Fullstack/
│
├── backend/
│   ├── config/
│   │   └── db.js                # MongoDB connection setup
│   ├── middleware/
│   │   └── authMiddleware.js    # JWT protection middleware
│   ├── models/
│   │   └── User.js              # User schema
│   ├── routes/
│   │   └── authRoutes.js        # Signup, Login, OTP routes
│   ├── server.js                # Main entry point
│   └── .env                     # Environment variables (Mongo URI, JWT secret)
│
└── frontend/
    ├── src/
    │   ├── pages/
    │   │   ├── Register.jsx     # User registration form
    │   │   ├── Login.jsx        # User login form
    │   │   ├── VerifyOtp.jsx    # OTP verification form
    │   │   └── Home.jsx         # Protected home page
    │   ├── App.jsx               # Main routes
    │   └── main.jsx              # React DOM rendering
    └── package.json              # Frontend dependencies
</pre>

<hr/>

<h2>🚀 How to Run the Project</h2>

<h3>Backend</h3>
<pre>
cd backend
npm install
npm run dev
</pre>

<h3>Frontend</h3>
<pre>
cd frontend
npm install
npm run dev
</pre>

<hr/>

<h2>📌 Important Notes</h2>
<ul>
  <li>MongoDB database is created automatically after first signup</li>
  <li>OTP is printed in backend console for testing</li>
  <li>Node.js version 18 or 20 is recommended</li>
</ul>

<hr/>

<h2>🎓 Academic Use</h2>
<p>
This project is suitable for:
</p>
<ul>
  <li>College practical exams</li>
  <li>Mini projects</li>
  <li>Authentication system demonstration</li>
  <li>Full stack development learning</li>
</ul>

<hr/>

<p align="center">
<b>Developed for learning and academic purposes 🚀</b>
</p>
