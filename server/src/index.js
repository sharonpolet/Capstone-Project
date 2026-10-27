
import dns from 'node:dns';

dns.setServers(['1.1.1.1', '8.8.8.8']);

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import router from './routes/tasks.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Frontend build: Capstone-Project/client/dist
const clientDist = path.resolve(__dirname, '../../client/dist');

app.use(
    cors({
        origin: (process.env.CLIENT_ORIGIN || 'http://localhost:5173')
            .split(',')
            .map((x) => x.trim()),
    })
);

app.use(express.json({ limit: '100kb' }));

// API routes
app.get('/api/health', (req, res) =>
    res.json({ status: 'ok', app: 'task-project-management' })
);

app.use('/api/tasks', router);

// Serve the built React frontend
app.use(express.static(clientDist));

// React fallback for frontend routes, without intercepting API requests
app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api/')) {
        return next();
    }

    res.sendFile(path.join(clientDist, 'index.html'), (err) => {
        if (err) next(err);
    });
});

// Error handling
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError' || err.name === 'CastError') {
        return res.status(400).json({ message: err.message });
    }

    console.error(err.message);
    res.status(500).json({ message: 'Unexpected server error.' });
});

async function start() {
    if (!process.env.MONGO_URI) {
        console.error(
            'MONGO_URI missing. Copy server/.env.example to server/.env.'
        );
        process.exit(1);
    }

    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected');

        app.listen(PORT, () => {
            console.log('Task and Project Management System listening on ' + PORT);
            console.log('Serving frontend from: ' + clientDist);
        });
    } catch (e) {
        console.error('MongoDB connection failed:', e.message);
        process.exit(1);
    }
}

start();

