# ICT Academy of Kerala
## Full Stack Application Development with ReactJS
# Project Report: Task and Project Management System

**Student name(s):** [Add team member names]  
**Institution:** [Add institution name]  
**Course / batch:** [Add details]  
**Submission date:** [Add date]

---

## 1. Executive Summary
Task and Project Management System is a MERN-stack web application prototype designed to organise project tasks by assignee, priority, due date, and progress status. The client uses React and Vite, the API uses Node.js and Express, and MongoDB stores records through Mongoose. The MVP provides record creation, listing, searching, deletion, and domain-relevant summary indicators.

## 2. Introduction
Small teams and organisations often keep operational information in separate documents or spreadsheets. This project explores how a web application with a React interface and a central MongoDB database can organise a focused set of records. This is an educational prototype, not a production-ready service.

## 3. Objectives
- Build a responsive React interface for the project domain.
- Implement a REST API using Express and Node.js.
- Persist records in MongoDB through Mongoose.
- Provide basic create, list, search, and delete flows.
- Display useful summary indicators.
- Use environment variables and prevent secrets from being committed.
- Document setup and manual verification steps.

## 4. Scope and Deliverables
**In scope:** React/Vite client; Express API; Mongoose model; GET, POST, and DELETE endpoints; dashboard search and summary metrics; basic schema validation; README and environment examples.

**Out of scope for this MVP:** authentication, role-based access, record editing, audit history, automated backups, and production-grade monitoring.

**Deliverables:** client and server source code, README, `.gitignore`, placeholder `.env.example` files, sample data, and this report.

## 5. Methodology
1. Define the target workflow and minimum viable features.
2. Model the primary record using a Mongoose schema.
3. Implement REST endpoints and centralised error handling.
4. Build the dashboard and data-entry form in React.
5. Connect the client to the API through a configurable URL.
6. Test each core flow manually.
7. Document setup, deployment requirements, and limitations.

## 6. Project Activities
- Maintain tasks records.
- Capture domain-specific fields: Task title, Project, Assignee, Priority, Status, Due date.
- Search across fields displayed in the dashboard.
- Create records with basic server-side schema validation.
- Delete records after user confirmation.
- Show loading, empty, success, and error states.

### Architecture
```text
User → React + Vite → Express REST API → Mongoose → MongoDB
```
The browser communicates with the Express API; it does not connect directly to MongoDB. The database URI is configured on the server using an environment variable.

### Data model
Main collection: `tasks`

- **Task title** (`title`): text; required.
- **Project** (`project`): text; required.
- **Assignee** (`assignee`): text; required.
- **Priority** (`priority`): select; required.
- **Status** (`status`): select; required.
- **Due date** (`dueDate`): date; optional.

Mongoose adds creation and update timestamps to each document.

### API design
| Method | Route | Purpose |
|---|---|---|
| GET | `/api/health` | API health check |
| GET | `/api/tasks` | Retrieve records |
| POST | `/api/tasks` | Create a record |
| DELETE | `/api/tasks/:id` | Delete a record |

## 7. Results & Findings
The source package implements the MVP flows described above. Run the project and record actual outcomes below before submission; tests should not be marked as passed until executed.

| Test | Expected result | Actual result |
|---|---|---|
| API health check | JSON indicates `status: ok` | [Complete after testing] |
| Read records | Saved records are displayed | [Complete after testing] |
| Create record | Valid input is stored and displayed | [Complete after testing] |
| Invalid input | Invalid schema values are rejected | [Complete after testing] |
| Search | List narrows to matching records | [Complete after testing] |
| Delete | Confirmed record is removed | [Complete after testing] |
| Persistence | Record remains after refresh | [Complete after testing] |

## 8. Conclusion
Task and Project Management System demonstrates a basic full-stack workflow using React, Express, Node.js, and MongoDB. It provides a central interface for the selected records and a foundation for future improvements such as editing, authentication, automated tests, and production deployment hardening.

## 9. Appendix
### Environment setup
Copy `server/.env.example` to `server/.env`, add a private MongoDB connection string, and keep the real `.env` file out of version control. The client API URL can be overridden using `client/.env`.

### Commands
```bash
# Terminal 1
cd server
npm install
npm run dev

# Terminal 2
cd client
npm install
npm run dev
```

### References
- MongoDB documentation: https://www.mongodb.com/docs/
- Express documentation: https://expressjs.com/
- React documentation: https://react.dev/
- Vite documentation: https://vite.dev/
- Mongoose documentation: https://mongoosejs.com/docs/

### Submission details to complete
- GitHub repository URL: [Add after pushing]
- Hosted application URL: [Add after deployment]
- Screenshots: [Add desktop and mobile screenshots]
- Team member names and contributions: [Complete]
- Known limitations: [Complete after testing]
