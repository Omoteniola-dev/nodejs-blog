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
    try{
        const post_id = req.params.id
        const deletedPost = await Post.deleteOne({ id: post_id });
        return res.status(200).json({ message: `Post with the id ${post_id} deleted`});
    }
    catch(err){
        throw err;
    }
};

exports.editPost = async(req, res) => {
    try {
        const selectedPost = await Post.findByIdAndUpdate({ id: req.params.id }, ...req.body);

        return res.status(200).json({ message: `Post with id: ${req.params.id} has been updated`});
    }
    catch(err){
        throw err;
    }
};


exports.deleteAllPosts = async(req, res) => {
    try{
        const deletedPosts = await Post.deleteMany({});
        return res.status(200).json({ message: `All posts have been deleted`});
    }
    catch(err){
        throw err
    }
}