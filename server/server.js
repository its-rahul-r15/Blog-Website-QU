import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { connect } from 'mongoose';
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';

const app = express();
await connectDB(); // Connect to the database

//Middlewares
app.use(cors());
app.use(express.json());


// Routes

app.get('/', (req, res) => {
    res.send('Welcome to the Blog Website API');
});

app.use('/api/admin',adminRouter)
app.use('/api/blog',blogRouter)

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app; // Export the app for testing purposes