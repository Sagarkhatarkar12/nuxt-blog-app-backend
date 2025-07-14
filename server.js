const express = require('express');
const cors = require("cors");
const dotenv  = require("dotenv");
// const connectDB = require();
dotenv.config();
const app = express();
app.use(cors());
console.log(express)
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("Hiii this our backend api");
})
app.get("/post",(req,res)=>{
    console.log(req.body.url)
    res.send("<H1>Helo my Name is anfani gonsalos </H1>")
})
const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
})
