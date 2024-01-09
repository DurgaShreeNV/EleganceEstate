import express from 'express';
import mongoose from 'mongoose';
import dotevn from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

dotevn.config();

//mongoose method
mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log('Connected to MongoDB!');
    })
    .catch((err) => {
        console.log(err);
    });

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

//Using the api route in this index.js
//Basically meaning that any time the we go to api/user, use this router
app.use('/api/user', userRouter);
//auth route
app.use('/api/auth', authRouter);