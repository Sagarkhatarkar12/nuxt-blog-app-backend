const auth = require("../models/auth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const createUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    console.log(req.body)
      console.log("File:", req.file);
    if (!userName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    // Check duplicate email
    const existingUser = await auth.findOne({ email });
    if (existingUser) {
      console.log("user already exit....");
      return res.status(400).json({ message: "Email already registered" });
      
    }
    // url nikal lete hai 
    const profileImageUrl = req.file?.path || "";

    
    // in this we bcrypt the password
    const hashPassword = await bcrypt.hash(password, 10);
    const authdata = await new auth({
      userName,
      email,
      password: hashPassword,
      profileImage: profileImageUrl,
    });
    const savedPost = await authdata.save();
    console.log("Data is saving...");
    res.status(201).json(savedPost);
    // console.log(userName, email, password);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
const loginCheck = async (req,res)=>{
  try{
  const   {email,password} = req.body;
   // ✅ Check input fields
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }
  const user = await auth.findOne({email});
  if(!user){
    console.log("user does not exit exit")
    // res.status(400).json("user does not exit")
  }
  else{
 const ismatch = await bcrypt.compare(password,user.password)
 if(!ismatch){
  console.log("passwor does not match  ")
 }
//  Generate jwt token here why for login 
 const token  = jwt.sign({id:user._id,email:user.email },  process.env.JWT_SECRET,{expiresIn:"1h"});
     // Remove password from response
    // const { password: pwd, ...userData } = user._doc;

   // Remove password from response
    const { password: pwd, ...userData } = user._doc;

    res.status(200).json({
      message: "Login successful",
      token,
      user: userData,
    });
  }


  }
  catch(error){
    console.log("server error",error)
  }
}



const findALLData = async () => {
  try {
    const data = await auth.find();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
findALLData();
module.exports = { createUser,loginCheck };
