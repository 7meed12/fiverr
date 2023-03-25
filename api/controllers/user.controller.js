import jwt from "jsonwebtoken";
import User from "../models/user.model.js";


export const deleteUser = async (req , res) => {
    try{ 
        const user =await User.findById(req.params.id)
        if(req.userId !== user._id.toString()) return res.status(400).json({error: "You are not authorized"});
        await User.findByIdAndDelete(req.params.id);
        res.send("User deleted successfully")
    
    }catch (error){
        console.log(error);
        
    }
 }
export const fn = async (req , res) => {}

export const logout = async (req , res) => {
    res.clearCookie("accessToken" , {
        httpOnly: true,
        sameSite: "none",
        secure: true,
    }).statis(200).json({message: "logged out successfully"});
}
