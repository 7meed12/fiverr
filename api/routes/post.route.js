import express from "express";
import {verifyToken} from "../middleware/jwt.js";
import {createPost , deletePost , getPost , getPosts} from "../controllers/post.controller.js";

const router = express.Router();


router.post("/" , verifyToken , createPost);
router.delete("/:id" , verifyToken , deletePost);
router.get("/single/:id" , verifyToken , getPost);
router.get("/" , verifyToken , getPosts);


export default router ;
