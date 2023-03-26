import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoute from './routes/user.route.js';
import postRoute from './routes/post.route.js';
import reviewRoute from './routes/review.route.js';
import conversationRoute from './routes/conversation.route.js';
import messageRoute from './routes/message.route.js';
import authRoute from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
app.use(cors({origin :"http://localhost:5173", credentials : true})) 
app.use(express.json());
app.use(cookieParser()); 
dotenv.config();
mongoose.set("strictQuery" , true);


const connect = async()=>{
    try{
        mongoose.connect(process.env.key);
        console.log("connected");
    
    }catch(err){
        console.log(err);
    }
}

app.use("/api/auth" ,authRoute);
app.use("/api/users" , userRoute);
app.use("/api/post" ,postRoute);
app.use("/api/review" ,reviewRoute);
app.use("/api/conversation" ,conversationRoute);
app.use("/api/message" ,messageRoute);

app.use((err , req , res , next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    return res.status(status).json({error: message});
})
app.listen(8800 , () => {
    connect();
    console.log("running");
})
