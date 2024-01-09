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

//Creating middleware for handling try catch, app.use is going to take 4 things, one is the error (error is the error that we will be getting as an input to this middleware), req (data from the client or the browser), res (response from the server to the client), next (go to the next middleware)
app.use((err, req, res, next) => {
    //basically saying that display error status codes, if there is an error without code, then display the code as 500, internal server error
    const statusCode = err.statusCode || 500;
    //We create another constant for error message, here also we either display the error message, if there is any error without error message then we display Internal server error
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
})