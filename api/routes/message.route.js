import express from "express";
import {fn} from "../controllers/user.controller.js";
const router = express.Router();


router.get("/" , (req , res) => fn);


export default router ;
