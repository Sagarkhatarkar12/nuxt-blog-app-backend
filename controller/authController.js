const auth = require("../models/auth");
const createUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const authdata = await new auth(req.body);
    const savedPost = await authdata.save();
    console.log("Data is saving...");
    res.status(201).json(savedPost);
    console.log(userName, email, password);
  } catch (err) {
    console.log(err);
  }
};
const findALLData = async ()=>{
    try{
            const data = await auth.find();
            console.log(data)
    }catch(err){
        console.log(err)
    }
}
findALLData()
module.exports = { createUser };
