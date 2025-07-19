const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/dbconnect");
const postRoutes = require("./routes/PostRoutes");
const authRoutes  = require('./routes/AuthRoutes')
const app = express();

app.use(cors());

app.use(express.json());
connectDB();
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use("/api/posts", postRoutes);
app.use("/api/auth",authRoutes)
// app.use("api/posts",postRoutes)

app.get("/", (req, res) => {
  console.log(req.body);
  res.send("Hiii this our backend api");
});

app.get("/post", (req, res) => {
  // console.log(req.body.url)
  console.log(req)
  res.send("<H1>Helo my Name is anfani gonsalos </H1>");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
