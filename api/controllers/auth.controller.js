import User from '../models/user.models.js';
import bcryptjs from 'bcryptjs';

export const signup = async (req, res, next) => {
    //we are getting the data from the browser, that is from the body
    // console.log(req.body)
    const { username, email, password } = req.body;
    //hashing: hashSync ensure that it implements await internally, also we pass something called salt number to this function and then while passing the data to the newUser, we shall pass this hashedPassword
    const hashedPassword = bcryptjs.hashSync(password, 10);
    //User is the model that we had created in the models folder and also import it in this folder 
    const newUser = new User({ username, email, password: hashedPassword });
    try {
        //The following line saves it in the database, but this line takes time on the basis of various parameters such as internet speed, etc so lets use await, to use await here, we have to change this function from synchronous to asynchronous function
        await newUser.save();
        //once it is saved, lets create a response of 201 indicating that something is created and then lets give a user message indicating that the user is created.
        res.status(201).json('User created successfully!');
    }
    catch (error) {
        next(error);
    }
};