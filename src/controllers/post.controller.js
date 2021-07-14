const Post = require("../models/post.model");
const shortid = require("shortid");

exports.createPost = async(req, res) => {
    try {
        const post_id = shortid.generate();
        const post = await Post.create({ id: post_id, ...req.body });
        await post.save();
        
        console.log(post);
        return res.status(200).json({ message: "New post created" });
    }
    catch(err){
        throw err;
    }
};

exports.fetchAllPosts = async(req, res) => {
    try{
        const posts = await Post.find({});

        return res.status(200).json({ message: posts })
    }
    catch(err){
        throw err;
    }
};

exports.deletePost = async(req, res) => {
    return null;
};

exports.editPost = async(req, res) => {
    return null;
};


exports.deleteAllPosts = async(req, res) => {
    return null;
}