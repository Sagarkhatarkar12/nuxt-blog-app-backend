const jwt = "jsonwebtoken"
const authmiddleware = (req,res,next)=>{
    const token = req.header("Authorization")?.replace("Bearer ", "")
    if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

}
module.exports = authmiddleware;