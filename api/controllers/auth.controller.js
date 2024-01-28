import User from '../models/user.models.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    try {
        await newUser.save();
        res.status(201).json('User created successfully!');
    }
    catch (error) {
        next(error);
    }
}; 
export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const validUser = await User.findOne({ email });
        if (!validUser) return next(errorHandler(404, 'Wrong credentials!'));
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) return next(errorHandler(401, 'Wrong credentials!'));
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        const { password: pass, ...rest } = validUser._doc;
        res
            .cookie('access_token', token, { httpOnly: true })
            .status(200)
            .json(rest);
    }
    catch (error) {
        next(error);
    }
};

export const google = async(req, res, next) => {
    //Here we check if the user is already present
    try{
      const user = await User.findOne({email: req.body.email})
      if(user) {
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
        const { password: pass, ...rest} = user._doc;
        res 
            .cookie('access_token', token, { httpOnly: true })
            .status(200)
            .json(rest);
      }
      else {
        //if the user is not present then we have to proceed with the creation of user, we generate a 16 digit password, firstly we use a random number: 0.12345678 and then we extract only the last 8 digits, later we do the same thing to get another 8 digits and then we finally get a 16 digit password. 
        const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
        const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
        const newUser = new User({username: req.body.name.split(" ").join("").toLowerCase() + Math.random().toString(36).slice(-4), email: req.body.email, password: hashedPassword, avatar: req.body.photo});
        await newUser.save();
        const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET);
        //Separate the password from the rest 
        const { password: pass, ...rest } = newUser._doc;
        res.cookie('access_token', token, { httpsOnly: true }).status(200).json(rest);
      }
    } catch (error) {
        next(error)
    }
}
