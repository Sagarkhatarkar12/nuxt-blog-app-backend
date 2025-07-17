const express = require("express")
const router = express.Router();
const {createPost, getAllPost,OnePost} = require ('../controller/postController')
router.post('/', createPost)
router.get('/', getAllPost);

router.get('/:id',OnePost)
module.exports = router;