import express from 'express';
import { auth } from './routes/authRoutes';

const app = express();

app.use(express.json());
app.use('/auth', auth);

export { app }