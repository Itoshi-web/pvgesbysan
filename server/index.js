import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cors from 'cors';
import 'dotenv/config';
import { corsConfig } from './config/cors.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Apply CORS middleware
app.use(cors(corsConfig));

// Health check endpoint for Render
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

const httpServer = createServer(app);

// Configure Socket.IO with CORS
const io = new Server(httpServer, {
  cors: corsConfig,
  path: '/socket.io/',
  transports: ['websocket', 'polling']
});

// ... rest of your server code ...