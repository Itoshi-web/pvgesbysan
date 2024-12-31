import cors from 'cors';

const allowedOrigins = [
  'http://localhost:5173',
  'https://lambent-nasturtium-dbb11c.netlify.app'
];

export const corsConfig = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST'],
  credentials: true,
  optionsSuccessStatus: 200
};