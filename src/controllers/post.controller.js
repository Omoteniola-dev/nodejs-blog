const Post = require("../models/post.model");

exports.createPost = async(req, res) => {
    try {
        const post = await Post.create({ ...req.body });
        await post.save();
        
        return res.status(200).json({ message: "New post created" });
    }
    catch(err){
        throw err;
    }
};

exports.deletePost = (req, res) => {
    return null;
};

exports.editPost = (req, res) => {
    return null;
};

exports.fetchAllPosts = (req, res) => {
    return null;
};

exports.deleteAllPosts = (req, res) => {
    return null;
}