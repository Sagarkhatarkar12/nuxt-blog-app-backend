const express = require("express")
const router = express.Router();
const {createUser}  =  require("../controller/authController")
router.post('/',createUser)
module.exports = router;
