import express, { Application } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/userRoutes';
import productRoutes from './routes/productRoutes';

dotenv.config();

const app: Application = express();
const PORT: any = process.env.PORT || 10000;
const HOST = process.env.HOST || 'localhost';

app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI as string)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});