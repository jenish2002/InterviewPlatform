# 🎯 Interview Platform

A real-time web application designed to streamline the online interview process by combining video calls, live chat, a collaborative code editor, and a shared whiteboard — all within a single interface.

---

## 🚀 Features

- **Google OAuth Authentication** — Secure sign-in using Google account via Passport.js
- **Create & Join Interviews** — Interviewer creates a meeting and joins with a link sent to the candidate via email
- **Video & Audio Calling** — Peer-to-peer video conferencing using PeerJS and WebRTC
- **Real-time Text Chat** — Live chat between interviewer and interviewee using Socket.io
- **Collaborative Code Editor** — Both users can write, view, and run code simultaneously using CodeMirror; supports multiple languages
- **Shared Whiteboard** — Real-time collaborative whiteboard for drawing diagrams and explaining concepts
- **Email Notifications** — Automated interview invitation emails sent via Google APIs

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Socket.io-client
- PeerJS (WebRTC)
- CodeMirror
- CSS

### Backend
- Node.js
- Express.js
- Socket.io
- Passport.js (Google OAuth)
- Google APIs (Gmail)

### Database
- MongoDB

### Tools
- Postman (API Testing)
- VS Code
- Render (Deployment)

---

## 📖 How It Works

1. User signs in with their Google account
2. **Interviewer** selects "Interviewer" role, enters the candidate's email, and clicks **Create Meeting** — a joining link will be sent to the candidate via email
3. **Candidate** receives the email, clicks the link or selects "Interviewee" role, enters the link, and clicks **Call Interviewer**
4. Interviewer receives the call notification and answers
5. Both users are connected and can use:
   - 📹 Video call
   - 💬 Live chat
   - 💻 Collaborative code editor (write, run, and share code in real time)
   - 🖊️ Shared whiteboard

---

## 👨‍💻 Developed By

**Jenish Patel** — Frontend (UI Design & Implementation)  
**Vatsal Patel** — Backend (API, Database & Signaling Server)

*Final Year Project — Dharmsinh Desai University, Nadiad | Developed at Rapidops Inc., Ahmedabad*
