const express = require("express")
const router = express.Router();
const {createUser,loginCheck}  =  require("../controller/authController")
const authmiddleware = require("../middleware/authmiddleware")
const upload = require("../middleware/upload")
router.post('/register',  upload.single("profileImage"),createUser)
router.post('/login',loginCheck )
module.exports = router;
