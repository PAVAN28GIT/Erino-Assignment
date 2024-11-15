import express from 'express';
import connectDB from './database/connect';
import cors from 'cors';

//Routes
import contactRoutes from './routes/contactRoutes';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connectDB();
const app = express(); 

app.get('/', (req, res) => {
    res.send('Welcome to Backend....');
});

app.use('/api/contact', contactRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
})
