const Post = require("../models/Post")
const createPost = async (req,res)=>{
try{
  console.log("POST Body:", req.body);
   const { title, body, author } = req.body;
   console.log("title",title);
   console.log("content",body);
   console.log("Author",author)
    const post = new Post(req.body);
    const savedPost  = await post.save();
    console.log("Data is saving...")
    res.status(201).json(savedPost)
}
catch(err){
    res.status(500).json({error:err.message})
}
};

// const Post = require("./models/Post");

const countPosts = async () => {
  try {
    const count = await Post.countDocuments();
    // console.log("Total Posts in DB:", count);
  } catch (err) {
    console.error("Error counting posts:", err);
  }
};

const getAllPost  = async (req,res)=>{
  try{
   const posts = await Post.find();
    res.json(posts);
    console.log("Total data post ", getPostdata)
  }
  catch(err){
    console.log("Error counting posts:", err)
  }
}
const OnePost  = async (req,res)=>{
  try{
// console.log(req.param.id)
    const OnePostData = await Post.findById()
    // console.log(OnePostData)

  }catch(err){
    console.log(err)
  }
}
const DeletePost = async (req,res)=>{
  try{
    const deletePost = await Post.deleteOne();
  }
  catch(err){
    console.log(err)
  }
}
const DeleteAllPost = async (req,res)=>{
  try{
    const DeletePost = await Post.deleteMany({})
    console.log(DeletePost)
  }
  catch(err){
    console.log(err)
  }
}


// OnePost();
// countPosts();
// getAllPost();

module.exports = { createPost,countPosts,getAllPost,OnePost };