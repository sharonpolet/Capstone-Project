# Task and Project Management System

A MERN-stack educational MVP for ICTAK Full Stack Application Development with ReactJS.

## Overview
Organise project tasks by assignee, priority, due date, and progress status.

## Features
- Create and list tasks records
- Search displayed fields
- Delete records with confirmation
- MongoDB persistence through Express and Mongoose
- Responsive dashboard with domain-specific summary metrics
- Loading, empty, success, and error states

## Stack
React + Vite, Node.js, Express, MongoDB, Mongoose, dotenv, and CORS.

## Setup (Windows CMD / VS Code)
Requirements: Node.js LTS, npm, and a MongoDB Atlas cluster or local MongoDB server.

1. Extract this ZIP, then open the `task-project-management` folder in VS Code.
2. In MongoDB Atlas, create a database user, allow your current IP in Network Access, and copy the connection string from **Connect → Drivers**.
3. Copy `server/.env.example` to `server/.env`. Replace the placeholders in `MONGO_URI` with your real credentials and cluster host. Never commit `.env`.
4. Open a terminal in VS Code and run these commands from the project root (the folder containing `client` and `server`):
   ```cmd
   cd server
   copy .env.example .env
   npm install
   npm run dev
   ```
   Edit `server/.env` before starting and enter your real `MONGO_URI`. If you already created `.env`, do not overwrite it with the copy command.
5. Open a **second terminal** and run:
   ```cmd
   cd client
   npm install
   npm run dev
   ```
6. Open the Vite URL shown in the terminal (usually `http://localhost:5173`). API health check: `http://localhost:5000/api/health`.

### If port 5000 is already in use on Windows
Run `netstat -ano | findstr :5000` in CMD. The last column is the process ID (PID). If it belongs to an old instance of this project, stop that process with `taskkill /PID <PID> /F`, replacing `<PID>` with the number shown. Alternatively, set `PORT=5001` in `server/.env` and set `VITE_API_URL=http://localhost:5001/api` in `client/.env` so the API and client use the same port. Do not stop an unfamiliar process.

The client defaults to `http://localhost:5000/api`. To change it, copy `client/.env.example` to `client/.env` and set `VITE_API_URL`.

## API
| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/health` | API health check |
| GET | `/api/tasks` | List records; optional `?limit=100` |
| POST | `/api/tasks` | Create a record |
| DELETE | `/api/tasks/:id` | Delete a record |

## GitHub safety
The root `.gitignore` excludes environment files, dependencies, logs, and build outputs. `.env.example` contains placeholders only. If a secret is accidentally pushed, rotate it immediately; deleting it in a later commit does not make the old secret safe.

## Test checklist
- [ ] API health check responds with `status: ok`
- [ ] Records load from MongoDB
- [ ] Valid record can be created
- [ ] Required fields are validated
- [ ] Search narrows the visible records
- [ ] Delete removes a record after confirmation
- [ ] Records remain after refreshing the page
- [ ] Error states work when the API is stopped

## Limitations
This is an educational MVP scaffold. It does not include authentication, role-based permissions, record editing, audit logs, automated tests, or production monitoring. Do not use it to store sensitive personal information without adding appropriate access controls and privacy safeguards.

## Deployment notes
Deploy the React client and Express API separately, use a managed MongoDB database, configure production environment variables and CORS, and test all core flows on the live URL. Do not use localhost URLs in production.

## References
- MongoDB: https://www.mongodb.com/docs/
- Express: https://expressjs.com/
- React: https://react.dev/
- Vite: https://vite.dev/
- Mongoose: https://mongoosejs.com/docs/
