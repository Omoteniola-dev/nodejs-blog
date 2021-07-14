const express = require("express");
const { fetchAllPosts, createPost, editPost, deletePost, deleteAllPosts} = require("../controllers/post.controller");
const router = express.Router();

router.get("/post", fetchAllPosts);
router.post("/post", createPost);
router.patch("/post/:id", editPost);
router.delete("/post/:id", deletePost);
router.delete("/post", deleteAllPosts);

module.exports = router;