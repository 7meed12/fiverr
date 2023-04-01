import Post from '../models/post.model.js'
import createError from '../utils/createError.js'

export const createPost =async  (req , res , next) => {
    const newPost = new Post({
        userId : req.userId,
        ...req.body
    })
    try{
       const savedPost =  await newPost.save();
        res.status(201).json(savedPost)
    }catch(err){
        next(createError(500 , err.message))
    }
}
export const deletePost = async (req , res , next) => {
    try{
        const {id} = req.params;
        const post = await Post.findById(id);
        if(post.userId != req.userId){
            throw createError(403 , "You are not authorized to delete this post")
        }
        if(!post){
            throw createError(404 , "Post not found")
        }
        await Post.findByIdAndDelete(id);
        res.status(200).json({message : "Post deleted successfully"})
        
    }catch(error) {next(error)}
}
export const getPost = (req , res , next) => {
    try{}catch(error) {next(error)}
}
export const getPosts = (req , res , next) => {
    try{}catch(error) {next(error)}
}