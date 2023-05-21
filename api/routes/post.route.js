import express from "express";
import {verifyToken} from "../middleware/jwt.js";
import {createPost , deletePost , getPost , getPosts} from "../controllers/post.controller.js";

const router = express.Router();





export default router ;
