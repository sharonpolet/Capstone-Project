import dns from 'node:dns';

dns.setServers(['1.1.1.1', '8.8.8.8']);
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './routes/tasks.js';
dotenv.config();
const app = express(), PORT = process.env.PORT || 5000;
app.use(cors({ origin: (process.env.CLIENT_ORIGIN || 'http://localhost:5173').split(',').map(x => x.trim()) }));
app.use(express.json({ limit: '100kb' }));
app.get('/api/health', (req, res) => res.json({ status: 'ok', app: 'task-project-management' }));
app.use('/api/tasks', router);
app.use((err, req, res, next) => { if (err.name === 'ValidationError' || err.name === 'CastError') return res.status(400).json({ message: err.message }); console.error(err.message); res.status(500).json({ message: 'Unexpected server error.' }) });
async function start() { if (!process.env.MONGO_URI) { console.error('MONGO_URI missing. Copy server/.env.example to server/.env.'); process.exit(1) } try { await mongoose.connect(process.env.MONGO_URI); console.log('MongoDB connected'); app.listen(PORT, () => console.log('Task and Project Management System API listening on ' + PORT)) } catch (e) { console.error('MongoDB connection failed:', e.message); process.exit(1) } }
start();
