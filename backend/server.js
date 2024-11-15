import express from 'express';
import connectDB from './database/connect.js';
import cors from 'cors';
import dotenv from 'dotenv';

//Routes
import contactRoutes from './routes/contactRoutes.js';

dotenv.config();

connectDB();
const app = express(); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'],
}));


app.get('/', (req, res) => {
    res.send('Welcome to Backend....');
});

app.use('/api', contactRoutes);

app.listen(8000, () => {
    console.log('Server is running on port 5000');
})
