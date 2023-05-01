import jwt from 'jsonwebtoken';
import createError from '../utils/createError.js';

export const verifyToken = (req , res , next) => {
    const token = req.cookies.accessToken;
    if(!token) return next(createError(403 , "unauthorized"));
    jwt.verify(token , process.env.JWT_SECRET , async (err , payload) => {
        if(err) return next(createError(403 , "token expired"));
        req.userId = payload.id;
        next();
    })
}