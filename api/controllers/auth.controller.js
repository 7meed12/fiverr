import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";


export const login = async (req , res , next)  => {
    try {
        const user = await User.findOne({username : req.body.username});
        if(!user) return next(createError(404 , "Invalid username"));
        const validPassword = bcrypt.compareSync(req.body.password, user.password);
        if(!validPassword) return next(createError(404 , "Invalid password/username"));
         const token = jwt.sign({id: user._id } , process.env.JWT_SECRET , {expiresIn: "5d"});
        const {password , ...others} = user._doc;
        res.cookie("accessToken" , token, {httpOnly : true}).status(200).send(others)
           
    }catch(error) {
        next(error)
    }

}
export const logout = async (req , res) => {
    res.send("Hello World");
}
export const register = async (req , res , next) => {
    try{
        
        const hash = bcrypt.hashSync(req.body.password, 10);
        const newUser = new User({
            ...req.body , 
            password : hash
        })
        await newUser.save();
        res.status(201).json({message: "User created successfully"});
    }catch(error) {
        next(error);
    }
}
