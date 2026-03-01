🔐 Full Stack Authentication System

A simple full-stack authentication system built using React (Frontend) and Flask (Backend) with JWT-based authentication.

🚀 Live Demo

🔗 Frontend (Vercel):
https://authproject-pi.vercel.app/

🔗 Backend (Render):
https://authproject-vldw.onrender.com

💻 GitHub Repository:
https://github.com/matey27/authproject

✨ Features Implemented
User Signup
User Login
Password hashing (secure storage using hashing algorithm)
JWT token generation
Protected Dashboard route
Displays logged-in user's name
Displays total registered users
Token-based authentication using Authorization headers

🛠️ Tech Stack
Frontend
React
CSS
React Router
Axios
Backend
Flask
SQLite
JWT (JSON Web Token)

Password Hashing
🔒 Authentication Flow
User signs up → password stored in hashed format.
User logs in → JWT token generated.
Token stored in localStorage.
Dashboard route is protected.
Authorization header used for authenticated requests.

⚠️ Deployment Notes
Backend is deployed on Render (Free Tier).
The first request may take a few seconds due to cold start.
The backend currently uses a local SQLite database.
Since Render free tier uses ephemeral storage, data may reset if the service restarts.
In production, this should be replaced with a persistent database such as PostgreSQL.

📌 How To Run Locally
Backend
cd backend
pip install -r requirements.txt
python app.py
Frontend
cd frontend
npm install
npm start

👩‍💻 Author
Brahmi Matey
